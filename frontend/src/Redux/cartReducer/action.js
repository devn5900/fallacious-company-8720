import axios from "axios";
import { DELETE_ERROR_CART_ITEM, DELETE_GET_CART_ITEM, DELETE_REQUEST_CART_ITEM, ERROR_CART_ITEM, GET_CART_ITEM, REQUEST_CART_ITEM } from "./actionTypes";


export const getCartData = () => async(dispatch) => {
    dispatch({type:REQUEST_CART_ITEM})
    try {
        let res = await axios.get(`https://vast-duck-coat.cyclic.app/cart`,{
            headers: {
                Authorization : `Bearer ${localStorage.getItem("token")||""}`
            }
        })
        console.log("data",res.data.data.cart);
        dispatch({type:GET_CART_ITEM,payload:res.data.data.cart});
    } catch (error) {
        dispatch({type:ERROR_CART_ITEM});
    }
    
}

export const deleteCartData = (id)=>(dispatch)=>{
   dispatch({type:DELETE_REQUEST_CART_ITEM});
    axios.delete(`https://vast-duck-coat.cyclic.app/cart/${id}`,{
    headers:{
        Authorization: `Bearer ${localStorage.getItem("token")||""}`
    }
   }).
   then(()=>dispatch({type:DELETE_GET_CART_ITEM})).
   catch(()=>dispatch({type:DELETE_ERROR_CART_ITEM}))
};