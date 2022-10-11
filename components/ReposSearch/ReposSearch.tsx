import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import { repoInputSearch } from "../../redux/actions/RepoSearch.actions";
import { RootState } from "../../redux/store";
import styles from "../../styles/UserSearch.module.css";
import { RepoSearchResult } from "../../types/types";
import RepoItem from "../RepoItem/Repoitem";

interface ReposSearchProps {
  response: RepoSearchResult;
}

const RepoSearch: React.FC<ReposSearchProps> = () => {
  const dispatch = useAppDispatch();
  const [repoInput, setRepoInput] = useState<string>("");

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepoInput(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(repoInputSearch(repoInput));
  };

  const repoSearchState = useAppSelector(
    (state: RootState) => state.repoSearch,
  );

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <form className="row " onSubmit={(e) => onSubmit(e)}>
          <div className="input-group col">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => onTextChange(e)}
            />
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-dark ">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="row d-flex justify-content-center p-0">
        {repoSearchState.repos &&
          repoSearchState.repos.map((repo) => {
            return <RepoItem key={repo.id} data={repo} />;
          })}
      </div>
    </div>
  );
};

export default RepoSearch;
