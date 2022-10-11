import { Octokit } from "@octokit/rest";
import { GetServerSideProps } from "next";
import { ReactElement, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import ReposSearch from "../components/ReposSearch/ReposSearch";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHooks";
import { repoInitialSearch } from "../redux/actions/RepoSearch.actions";
import { RootState } from "../redux/store";
import { NextPageWithLayout, RepoSearchResult } from "../types/types";

interface RepoSearchProps {
  response: RepoSearchResult;
}

const RepoSearch: NextPageWithLayout<RepoSearchProps> = ({ response }) => {
  const dispatch = useAppDispatch();
  const repoSearchState = useAppSelector(
    (state: RootState) => state.repoSearch,
  );

  useEffect(() => {
    if (repoSearchState.repos.length === 0) dispatch(repoInitialSearch());
  }, []);

  return <ReposSearch response={response} />;
};

RepoSearch.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_KEY,
  });
  const response: RepoSearchResult = await octokit.request(
    "GET /search/repositories",
    {
      q: "test",
      sort: "stars",
    },
  );

  return {
    props: { response },
  };
};

export default RepoSearch;
