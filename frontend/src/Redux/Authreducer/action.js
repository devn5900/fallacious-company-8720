import { Userlogin } from "../../Utils/api";
import { loginReq, loginReqFail, loginReqSucc, logoutUser } from "./actionType";
export const LoginReq = () => {
  return {
    type: loginReq,
  };
};
export const LoginReqSucc = (token) => {
  return { type: loginReqSucc, payload: token };
};
export const LoginReqFail = (payload) => {
  return { type: loginReqFail, payload };
};
export const logOutUser = () => {
  return { type: logoutUser };
};
export const userLogin = (payload) => (dispatch) => {
  dispatch(LoginReq());
  return Userlogin(payload)
    .then((res) => {
      if (res.token) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("avatar", res.data.avatar);
        dispatch(LoginReqSucc(res));
        return res;
      } else {
        dispatch(LoginReqFail(res.msg));
        return res;
      }
    })
    .catch((err) => {
      dispatch(LoginReqFail(err.msg));
    });
};
