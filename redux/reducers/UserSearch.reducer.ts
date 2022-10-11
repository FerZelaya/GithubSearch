import ActionTypes from "../../constants/ActionTypes";
import { UserSearchAction, UserSearchState } from "../../types/types";

const initialState: UserSearchState = {
  loading: false,
  users: [],
};

const userSearchReducer = (
  state = initialState,
  action: UserSearchAction = {
    type: ActionTypes.DEFAULT_TYPE,
    items: [],
  },
): UserSearchState => {
  switch (action.type) {
    case ActionTypes.USER_SEARCH_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionTypes.USER_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.items,
        error: false,
      };
    case ActionTypes.USER_SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.error,
      };

    default:
      return state;
  }
};

export default userSearchReducer;
