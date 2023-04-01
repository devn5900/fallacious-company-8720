import { Userlogin } from "../../Utils/api"
import { loginReq, loginReqFail, loginReqSucc } from "./actionType"

export const LoginReq=()=>{
return {
    type:loginReq,
}
}
export const LoginReqSucc=(token)=>{
return {type:loginReqSucc,payload:token}
}
export const LoginReqFail=()=>{
    return {type:loginReqFail}

}

export const userLogin=(payload)=>(dispatch)=>{
    dispatch(LoginReq());
    Userlogin(payload).then((res)=>{
        console.log(res)
            dispatch(LoginReqSucc(res.token))
    }).catch((err)=>{
        dispatch(LoginReqFail())
    })
}