import {
  GET_ACCESSORIES_DATA_SUCESS,
  GET_DATA_ERROR,
  GET_DATA_REQUEST,
  GET_MENS_DATA_SUCESS,
  GET_WOMENS_DATA_SUCESS,
} from "./actionType";
import axios from "axios";
//Mens Data action function
export const getMensData = (payload) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get("https://vast-duck-coat.cyclic.app/products?type=Men")
    .then((res) =>
      dispatch({ type: GET_MENS_DATA_SUCESS, payload: res.data.data })
    )
    .catch((err) => dispatch({ type: GET_DATA_ERROR }));
};
//Womens Data action function
export const getWomensData = (payload) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get("https://vast-duck-coat.cyclic.app/products?type=Men")
    .then((res) =>
      dispatch({ type: GET_WOMENS_DATA_SUCESS, payload: res.data.data })
    )
    .catch((err) => dispatch({ type: GET_DATA_ERROR }));
};
//Accessories Data action function
export const getAccessoriesData = (payload) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get("https://vast-duck-coat.cyclic.app/products?type=Men")
    .then((res) =>
      dispatch({ type: GET_ACCESSORIES_DATA_SUCESS, payload: res.data.data })
    )
    .catch((err) => dispatch({ type: GET_DATA_ERROR }));
};
