import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface UserSearchState {
  users: ItemsResults[];
  loading: boolean;
  error?: Error | boolean | string;
}

export interface UserData {
  userName: string;
  id: number;
  avatar_url: string;
  typeOfAccount: string;
  profile_url: string;
}

export interface UserSearchAction extends BaseAction, Data {}

export interface UserSearchResult {
  data: Data;
}

interface Data {
  items: ItemsResults[];
}

interface ItemsResults {
  avatar_url: string;
  id: number;
  login: string;
  type: string;
  html_url: string;
}

interface BaseAction {
  type: actionTypes;
  error?: Error | string;
}
