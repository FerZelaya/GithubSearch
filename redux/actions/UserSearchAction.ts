import { Octokit } from "@octokit/rest";
import { Action } from "redux";
import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import ActionTypes from "../../constants/ActionTypes";
import { ItemsResults, UserSearchResult } from "../../types/types";
import { RootState } from "../store";

export const userInitialSearch = Object.assign(
  () => async (dispatch: ThunkDispatch<RootState, {}, Action>) => {
    try {
      dispatch(userInitialSearch.start());
      const octokit = new Octokit({
        auth: process.env.GITHUB_KEY,
      });
      const { data }: UserSearchResult = await octokit.request(
        "GET /search/users",
        {
          q: "luuna-tech",
          sort: "followers",
        },
      );
      const { items } = data;

      dispatch(userInitialSearch.success(items));
    } catch (error: any) {
      dispatch(userInitialSearch.fail(error as Error));
    }
  },
  {
    start: () => ({ type: ActionTypes.USER_SEARCH_START }),
    success: (items: ItemsResults[]) => ({
      type: ActionTypes.USER_SEARCH_SUCCESS,
      items,
    }),
    fail: (error: Error) => ({
      type: ActionTypes.USER_SEARCH_FAIL,
      error: error.message,
    }),
  },
);

export const userInputSearch = Object.assign(
  (userToSearch: string) =>
    async (dispatch: ThunkDispatch<RootState, {}, Action>) => {
      try {
        dispatch(userInputSearch.start());
        const octokit = new Octokit({
          auth: process.env.GITHUB_KEY,
        });
        const { data }: UserSearchResult = await octokit.request(
          "GET /search/users",
          {
            q: userToSearch,
            sort: "followers",
          },
        );
        const { items } = data;

        dispatch(userInputSearch.success(items));
      } catch (error: any) {
        dispatch(userInputSearch.fail(error as Error));
      }
    },
  {
    start: () => ({ type: ActionTypes.USER_SEARCH_START }),
    success: (items: ItemsResults[]) => ({
      type: ActionTypes.USER_SEARCH_SUCCESS,
      items,
    }),
    fail: (error: Error) => ({
      type: ActionTypes.USER_SEARCH_FAIL,
      error: error.message,
    }),
  },
);
