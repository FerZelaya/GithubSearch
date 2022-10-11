import { combineReducers } from "redux";
import userSearch from "./UserSearch.reducer";
import repoSearch from "./ReposSearch.reducer";

export default combineReducers({
  userSearch,
  repoSearch,
});
