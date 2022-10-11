import { GetStaticProps } from "next";
import { ReactElement, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import UserSearch from "../components/UserSearch/UserSearch";
import { NextPageWithLayout, UserSearchResult } from "../types/types";
import { Octokit } from "@octokit/rest";
import { useAppDispatch } from "../hooks/useReduxHooks";
import { userInitialSearch } from "../redux/actions/UserSearchAction";

interface HomeProps {
  response: UserSearchResult;
}

const Home: NextPageWithLayout<HomeProps> = ({ response }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userInitialSearch());
  }, []);

  return <UserSearch response={response} />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
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
