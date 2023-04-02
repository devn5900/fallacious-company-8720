import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { userLogin } from '../../Redux/Authreducer/action'
export default function Login() {
  const {load,isErr,token}= useSelector((store)=>store.AuthReducer)
  const dispatch= useDispatch();
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
 
  const Userlogin=()=>{
    const payload={
      email:email,
      password:password,
    }
      dispatch(userLogin(payload))
  }
 
  return (
<>
    <Box pt={"2rem"} pb={"2rem"} bg={"#fff"}  color={"dodgerblue"}>
      <Heading mb={"1rem"} color={"doggerblue"} textAlign={"center"} fontSize={"lg"}>Login</Heading>
    <Box  boxShadow={"lg"} width={"50%"} m={"auto"} bg="white"  p={"1rem"} borderRadius={"10px"}>

  <FormLabel>
    Email
  </FormLabel>
  <Input  value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="email"/>
<FormLabel>
Password
</FormLabel>
<Input  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>

  <Button onClick={Userlogin} mt={"5px"} type="submit">Submit</Button>
</Box>
</Box>
    </>
  )
}
