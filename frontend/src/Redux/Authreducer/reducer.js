import React from 'react'
import { loginReq, loginReqFail, loginReqSucc } from './actionType';
const initialState = {
    load: false,
    isErr:false,
    isAuth: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token") || ""
}
export const reducer = (state=initialState, { type, payload }) => {


    switch (type) {
        case loginReq: 
        return { ...state, load: true }
        case loginReqSucc: 
        return { ...state, load: false,isAuth:true,token:payload }
        case loginReqFail:
            return {...state,load:false,isErr:true}
        default:
            return state;
    }
}
