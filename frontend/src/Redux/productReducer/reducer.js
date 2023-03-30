import {
  GET_ACCESSORIES_DATA_SUCESS,
  GET_DATA_ERROR,
  GET_DATA_REQUEST,
  GET_MENS_DATA_SUCESS,
  GET_WOMENS_DATA_SUCESS,
} from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_DATA_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case GET_MENS_DATA_SUCESS: {
      return { ...state, isLoading: false, data: payload };
    }
    case GET_WOMENS_DATA_SUCESS: {
      return { ...state, isLoading: false, data: payload };
    }
    case GET_ACCESSORIES_DATA_SUCESS: {
      return { ...state, isLoading: false, data: payload };
    }
    default: {
      return state;
    }
  }
};
