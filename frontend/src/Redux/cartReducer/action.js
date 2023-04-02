import axios from "axios";
import {
  ADD_TO_CART,
  DELETE_ERROR_CART_ITEM,
  DELETE_GET_CART_ITEM,
  DELETE_REQUEST_CART_ITEM,
  ERROR_CART_ITEM,
  GET_CART_ITEM,
  REQUEST_CART_ITEM,
} from "./actionTypes";

export const getCartData = () => async (dispatch) => {
  dispatch({ type: REQUEST_CART_ITEM });
  try {
    let res = await axios.get(`https://vast-duck-coat.cyclic.app/cart`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
      },
    });
    console.log("data", res.data.data.cart);
    dispatch({ type: GET_CART_ITEM, payload: res.data.data.cart });
  } catch (error) {
    dispatch({ type: ERROR_CART_ITEM });
  }
};

export const deleteCartData = (id) => (dispatch) => {
  dispatch({ type: DELETE_REQUEST_CART_ITEM });
  axios
    .delete(`https://vast-duck-coat.cyclic.app/cart/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
      },
    })
    .then(() => dispatch({ type: DELETE_GET_CART_ITEM, payload: id }))
    .catch(() => dispatch({ type: DELETE_ERROR_CART_ITEM }));
};

export const AddToCart = (item) => (dispatch) => {
  return fetch(`https://vast-duck-coat.cyclic.app/cart/${item._id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: ADD_TO_CART, payload: item });
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
