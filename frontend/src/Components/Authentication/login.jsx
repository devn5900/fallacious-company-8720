import React, { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export default function Login() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const payload={
    email:email,
    password:password,
  }
     const Userlogin=()=>{
       console.log(payload)
       fetch("https://vast-duck-coat.cyclic.app/user/login",{
        method:"POST",
           headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
       }).then((res)=>res.json()).then((res)=>{
      console.log(res)
      localStorage.setItem("token",res.token)
    }
    ).catch((err)=>{
        console.log(err)
    })  
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
