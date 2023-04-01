import React, { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export default function SignUp() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [confirm_pass,Setpass] = useState("")
  const [password,setPassword] = useState("")
  const payload={
    email:email,
    password:password,
    confirm_pass:confirm_pass,
    name:name
  }
  const UserRegister=()=>{
       console.log(payload)
    fetch("https://vast-duck-coat.cyclic.app/user/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(payload)
    }).then((res)=>res.json()).then((res)=>console.log(res))
  }
 
  return (
<>
    <Box pt={"2rem"} pb={"2rem"} bg={"black"}  color={"dodgerblue"}>
    <h1 style={{fontSize:"20px",fontWeight:"bold",marginBottom:"1rem"}}>Sign Up</h1>
      <Box  boxShadow={"dark-lg"} width={"50%"} m={"auto"} bg="white"  p={"1rem"} borderRadius={"10px"}>
      <FormLabel>
    Name
  </FormLabel>
  <Input type='text' value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Name"/>
  <FormLabel>
    Email
  </FormLabel>
  <Input type='email'  value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="email"/>
<FormLabel>
Password
</FormLabel>
<Input type='password'  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
  <FormLabel>
    Confirm password
  </FormLabel>
  <Input type='password'  value={confirm_pass} onChange={(e)=>Setpass(e.target.value)}  placeholder="Gender"/>
  <Button onClick={UserRegister} mt={"5px"} type="submit">Submit</Button>
</Box>

    </Box>
    </>
  )
}
