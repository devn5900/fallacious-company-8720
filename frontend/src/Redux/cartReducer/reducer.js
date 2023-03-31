import { ERROR_CART_ITEM, GET_CART_ITEM, REQUEST_CART_ITEM } from "./actionTypes"


const initialState = {
    isLoading: false,
    isError :false,
    data : []
}

export const reducer = (state = initialState,{type,payload})=>{
    switch(type){
        case REQUEST_CART_ITEM:
            return {...state,isLoading:true,isError:false};
        case GET_CART_ITEM:
            return {...state,isLoading:false,isError:false,data:payload};
        case ERROR_CART_ITEM:
            return {...state,isLoading:false,isError:true}
        default:
            return initialState
    }
}