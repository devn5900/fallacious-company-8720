import React from "react";
import { loginReq, loginReqFail, loginReqSucc, logoutUser } from "./actionType";
const initialState = {
  load: false,
  isErr: false,
  name: localStorage.getItem("name") || "",
  avatar: localStorage.getItem("avatar") || "",
  msg: "",
  isAuth: localStorage.getItem("token") ? true : false,
  token: localStorage.getItem("token") || "",
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case loginReq:
      return { ...state, load: true };
    case loginReqSucc:
      return {
        ...state,
        load: false,
        isAuth: true,
        isErr: false,
        msg: payload?.msg,
        token: payload?.token,
        name: payload?.data?.name,
        avatar: payload?.data?.avatar,
      };
    case loginReqFail:
      return {
        ...state,
        load: false,
        isErr: true,
        isAuth: false,
        msg: payload,
      };
    case logoutUser:
      return {
        ...state,
        isAuth: false,
        isErr: false,
        msg: "You are Loggedout !",
        token: "",
        name: "",
        avatar: "",
      };

    default:
      return state;
  }
};
