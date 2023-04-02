import {
  ADD_TO_CART,
  DELETE_ERROR_CART_ITEM,
  DELETE_GET_CART_ITEM,
  DELETE_REQUEST_CART_ITEM,
  ERROR_CART_ITEM,
  GET_CART_ITEM,
  REQUEST_CART_ITEM,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_CART_ITEM:
      return { ...state, isLoading: true, isError: false };
    case GET_CART_ITEM:
      return { ...state, isLoading: false, isError: false, data: payload };
    case ERROR_CART_ITEM:
      return { ...state, isLoading: false, isError: true };
    case DELETE_REQUEST_CART_ITEM:
      return { ...state, isLoading: true };
    case DELETE_GET_CART_ITEM:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [...state.data.filter((el) => el._id !== payload)],
      };
    case DELETE_ERROR_CART_ITEM:
      return { ...state, isError: true };
    case ADD_TO_CART:
      return { ...state, data: [...state.data, payload] };
    default:
      return initialState;
  }
};
