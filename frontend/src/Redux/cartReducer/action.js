import axios from "axios";
import { DELETE_ERROR_CART_ITEM, DELETE_GET_CART_ITEM, DELETE_REQUEST_CART_ITEM, ERROR_CART_ITEM, GET_CART_ITEM, REQUEST_CART_ITEM } from "./actionTypes";


export const getCartData = () => async(dispatch) => {
    dispatch({type:REQUEST_CART_ITEM})
    try {
        let res = await axios.get(`https://fakestoreapi.com/products/`)
        dispatch({type:GET_CART_ITEM,payload:res.data});
    } catch (error) {
        dispatch({type:ERROR_CART_ITEM});
    }
    
}

export const deleteCartData = (id)=>(dispatch)=>{
   dispatch({type:DELETE_REQUEST_CART_ITEM});
   return axios.delete(`https://fakestoreapi.com/products/${id}`).
   then(()=>dispatch({type:DELETE_GET_CART_ITEM})).
   catch(()=>dispatch({type:DELETE_ERROR_CART_ITEM}))
};