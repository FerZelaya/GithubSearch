import { GetServerSideProps } from "next";
import { ReactElement, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import UserSearch from "../components/UserSearch/UserSearch";
import { NextPageWithLayout, UserSearchResult } from "../types/types";
import { Octokit } from "@octokit/rest";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHooks";
import { userInitialSearch } from "../redux/actions/UserSearchAction";
import { RootState } from "../redux/store";

interface HomeProps {
  response: UserSearchResult;
}

const Home: NextPageWithLayout<HomeProps> = ({ response }) => {
  const dispatch = useAppDispatch();
  const userSearchState = useAppSelector(
    (state: RootState) => state.userSearch,
  );

  useEffect(() => {
    if (userSearchState.users.length === 0) dispatch(userInitialSearch());
  }, []);

  return <UserSearch response={response} />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_KEY,
  });
  const response: UserSearchResult = await octokit.request(
    "GET /search/users",
    {
      q: "luuna-tech",
    },
  );

  return {
    props: { response },
  };
};

export default Home;
