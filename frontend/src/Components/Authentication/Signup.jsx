import React, { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export default function SignUp() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [gender,Setgender] = useState("")
  const [password,setPassword] = useState("")
  const payload={
    email:email,
    password:password,
    gender:gender,
    name:name
  }
  const UserRegister=()=>{
       console.log(payload)
    fetch("https://ill-red-cod-robe.cyclic.app/users/register",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
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
  <Input value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Name"/>
  <FormLabel>
    Email
  </FormLabel>
  <Input  value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="email"/>
<FormLabel>
Password
</FormLabel>
<Input  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
  <FormLabel>
    Gender
  </FormLabel>
  <Input  value={gender} onChange={(e)=>Setgender(e.target.value)}  placeholder="Gender"/>
  <Button onClick={UserRegister} mt={"5px"} type="submit">Submit</Button>
</Box>

    </Box>
    </>
  )
}
