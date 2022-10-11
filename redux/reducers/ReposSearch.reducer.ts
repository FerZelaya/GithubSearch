import ActionTypes from "../../constants/ActionTypes";
import {
  RepoSearchAction,
  RepoSearchState,
  UserSearchAction,
} from "../../types/types";

const initialState: RepoSearchState = {
  loading: false,
  repos: [],
};

const userSearchReducer = (
  state = initialState,
  action: RepoSearchAction = {
    type: ActionTypes.DEFAULT_TYPE,
    items: [],
  },
): RepoSearchState => {
  switch (action.type) {
    case ActionTypes.REPO_SEARCH_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionTypes.REPO_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        repos: action.items,
        error: false,
      };
    case ActionTypes.REPO_SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        repos: [],
        error: action.error,
      };

    default:
      return state;
  }
};

export default userSearchReducer;
