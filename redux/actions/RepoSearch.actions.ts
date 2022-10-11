import { Octokit } from "@octokit/rest";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import ActionTypes from "../../constants/ActionTypes";
import { RepoItemsResults, RepoSearchResult } from "../../types/types";
import { RootState } from "../store";

export const repoInitialSearch = Object.assign(
  () => async (dispatch: ThunkDispatch<RootState, {}, Action>) => {
    try {
      dispatch(repoInitialSearch.start());
      const octokit = new Octokit({
        auth: process.env.GITHUB_KEY,
      });
      const { data }: RepoSearchResult = await octokit.request(
        "GET /search/repositories",
        {
          q: "luuna-tech/test",
          sort: "stars",
        },
      );

      const { items } = data;

      dispatch(repoInitialSearch.success(items));
    } catch (error: any) {
      dispatch(repoInitialSearch.fail(error as Error));
    }
  },
  {
    start: () => ({ type: ActionTypes.REPO_SEARCH_START }),
    success: (items: RepoItemsResults[]) => ({
      type: ActionTypes.REPO_SEARCH_SUCCESS,
      items,
    }),
    fail: (error: Error) => ({
      type: ActionTypes.REPO_SEARCH_FAIL,
      error: error.message,
    }),
  },
);

export const repoInputSearch = Object.assign(
  (reposToSearch: string) =>
    async (dispatch: ThunkDispatch<RootState, {}, Action>) => {
      try {
        dispatch(repoInputSearch.start());
        const octokit = new Octokit({
          auth: process.env.GITHUB_KEY,
        });
        const { data }: RepoSearchResult = await octokit.request(
          "GET /search/repositories",
          {
            q: reposToSearch,
            sort: "stars",
          },
        );
        const { items } = data;

        dispatch(repoInputSearch.success(items));
      } catch (error: any) {
        dispatch(repoInputSearch.fail(error as Error));
      }
    },
  {
    start: () => ({ type: ActionTypes.REPO_SEARCH_START }),
    success: (items: RepoItemsResults[]) => ({
      type: ActionTypes.REPO_SEARCH_SUCCESS,
      items,
    }),
    fail: (error: Error) => ({
      type: ActionTypes.REPO_SEARCH_FAIL,
      error: error.message,
    }),
  },
);
