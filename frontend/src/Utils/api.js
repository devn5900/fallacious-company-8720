/// write your api requests here
import axios from "axios";

export const searchItem = async (query) => {
  try {
    const res = await axios.get(
      `https://vast-duck-coat.cyclic.app/products?q=${query}`
    );
    return res.data.data;
  } catch (error) {
    return false;
  }
};
