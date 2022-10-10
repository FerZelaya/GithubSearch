import { ReactElement } from "react";
import Layout from "../components/Layout/Layout";
import UserSearch from "../components/UserSearch/UserSearch";
import { NextPageWithLayout } from "../types/types";

const RepoSearch: NextPageWithLayout = () => {
  return <UserSearch />;
};

RepoSearch.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default RepoSearch;
