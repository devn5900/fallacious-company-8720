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

export const Userlogin = (payload) => {
  return fetch("https://vast-duck-coat.cyclic.app/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
