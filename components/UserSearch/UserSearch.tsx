import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import { userInputSearch } from "../../redux/actions/UserSearchAction";
import { RootState } from "../../redux/store";
import styles from "../../styles/UserSearch.module.css";
import { UserSearchResult } from "../../types/types";
import UserItem from "../UserItem/UserItem";

interface UserSearchProps {
  response: UserSearchResult;
}

const UserSearch: React.FC<UserSearchProps> = () => {
  const dispatch = useAppDispatch();
  const [userInput, setUserInput] = useState<string>("");

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(userInputSearch(userInput));
  };

  const userSearchState = useAppSelector(
    (state: RootState) => state.userSearch,
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
        {userSearchState.users &&
          userSearchState.users.map((user) => {
            return <UserItem key={user.id} data={user} />;
          })}
      </div>
    </div>
  );
};

export default UserSearch;
