/* eslint-disable no-console */
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import ActionTypes from "../../constants/ActionTypes";

export const actionReducer = <T>(payload: T, type: ActionTypes) => ({
  type,
  payload,
});

export const errorHandler = (
  from: string,
  customError: string,
  error: any,
  showToast: boolean,
) => {
  console.debug(from, error);
  if (showToast) {
    toast(customError, {
      type: "error",
    });
  }
};

export const successHandler = (message: string, showToast: boolean) => {
  console.debug("Success", message);
  if (showToast) {
    toast(message, { type: "success" });
  }
};
