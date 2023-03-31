import axios from "axios";
import { ERROR_CART_ITEM, GET_CART_ITEM, REQUEST_CART_ITEM } from "./actionTypes";
export const getCartData = () => async(dispatch) => {
    dispatch({type:REQUEST_CART_ITEM})
    try {
        let res = await axios.get("https://vast-duck-coat.cyclic.app/products/")
        console.log("resdata",res.data.data);
        dispatch({type:GET_CART_ITEM,payload:res.data.data});
    } catch (error) {
        dispatch({type:ERROR_CART_ITEM});
    }
    
}