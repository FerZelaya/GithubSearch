import axios from "axios";
import { GetStaticProps } from "next";
import { ReactElement } from "react";
import Layout from "../components/Layout/Layout";
import UserSearch from "../components/UserSearch/UserSearch";
import { NextPageWithLayout, UserSearchResult } from "../types/types";
import { Octokit } from "@octokit/rest";

interface HomeProps {
  response: UserSearchResult;
}

const Home: NextPageWithLayout<HomeProps> = ({ response }) => {
  return <UserSearch response={response} />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_KEY,
  });
  const response = await octokit.request("GET /search/users", {
    q: "luuna-tech",
  });

  return {
    props: { response },
  };
};

export default Home;
