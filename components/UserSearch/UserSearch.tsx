import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/useReduxHooks";
import { RootState } from "../../redux/store";
import styles from "../../styles/UserSearch.module.css";
import { UserSearchResult } from "../../types/types";
import UserItem from "../UserItem/UserItem";

interface UsrrSearchProps {
  response: UserSearchResult;
}

const UserSearch: React.FC<UsrrSearchProps> = ({ response }) => {
  const userSearchState = useAppSelector(
    (state: RootState) => state.userSearch,
  );

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <form
          className="row "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
            />
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-dark ">
              Search
            </button>
          </div>
        </form>
      </div>
      {userSearchState.users &&
        userSearchState.users.map((user) => {
          return (
            <div
              key={user.id}
              className="row d-flex justify-content-center p-0"
            >
              <UserItem data={user} />
            </div>
          );
        })}
    </div>
  );
};

export default UserSearch;
