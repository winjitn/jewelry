import axios from "axios";
import {
  FETCH_USER,
  FETCH_ROOM,
  STORE_ITEM,
  DELETE_ITEM,
  CLEAR_ITEM
} from "./types";

export const fetchUser = () => async dispatch => {
  const response = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: response.data });
};

export const login = (
  loginData,
  history,
  errorLogin,
  e,
  btn
) => async dispatch => {
  const response = await axios.post("/api/login", loginData);
  if (response.data !== "success") {
    errorLogin(e, btn);
    dispatch({ type: FETCH_USER, payload: false });
  } else {
    history.push("/products");
    dispatch({ type: FETCH_USER, payload: response.data });
  }
};

export const fetchRoom = () => async dispatch => {
  const res = await axios.get("/api/products");

  dispatch({ type: FETCH_ROOM, payload: res.data });
};

export const storeItem = code => {
  return { type: STORE_ITEM, payload: code };
};

export const deleteItem = code => {
  return { type: DELETE_ITEM, payload: code };
};

export const clearItem = code => {
  return { type: CLEAR_ITEM, payload: code };
};

export const sendContactMail = (content, history) => async dispatch => {
  const res = await axios.post("/api/contact", content);
  res.data === "success"
    ? history.push("/component/form-submit")
    : history.push("/component/submit-error");

  dispatch({ type: "" });
};

export const sendQuoteMail = (content, history) => async dispatch => {
  const res = await axios.post("/api/quote", content);
  res.data === "success"
    ? history.push("/component/form-submit")
    : history.push("/component/submit-error");

  dispatch({ type: "" });
};
