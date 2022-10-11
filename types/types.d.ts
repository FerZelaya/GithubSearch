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

export interface RepoSearchState {
  repos: RepoItemsResults[];
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
export interface RepoSearchAction extends BaseAction, RepoData {}

export interface UserSearchResult {
  data: Data;
}

export interface RepoSearchResult {
  data: RepoData;
}

interface Data {
  items: ItemsResults[];
}

interface RepoData {
  items: RepoItemsResults[];
}

interface ItemsResults {
  avatar_url: string;
  id: number;
  login: string;
  type: string;
  html_url: string;
}

interface RepoItemsResults {
  full_name: string;
  id: number;
  private: boolean;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
  owner: { avatar_url: string | null } | null;
}

interface BaseAction {
  type: actionTypes;
  error?: Error | string;
}
