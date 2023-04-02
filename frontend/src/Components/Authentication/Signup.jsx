import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function SignUp() {
  const { isAuth } = useSelector((store) => store.AuthReducer);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirm_pass, Setpass] = useState("");
  const [password, setPassword] = useState("");
  const payload = {
    email: email,
    password: password,
    confirm_pass: confirm_pass,
    name: name,
  };
  const toast = useToast();
  if (isAuth) {
    return <Navigate to="/" />;
  }
  const UserRegister = () => {
    console.log(payload);
    fetch("https://vast-duck-coat.cyclic.app/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        return toast({
          title: res.msg,
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      })
      .catch((err) => {
        return toast({
          title: err.msg,
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      });
  };

  return (
    <>
      <Box pt={"2rem"} pb={"2rem"} bg={"#fff"} color={"dodgerblue"}>
        <Heading
          mb={"1rem"}
          color={"dodgerblue"}
          textAlign={"center"}
          fontSize={"xl"}
        >
          Sign Up
        </Heading>
        <Box
          boxShadow={"lg"}
          width={"50%"}
          m={"auto"}
          bg="white"
          p={"1rem"}
          borderRadius={"10px"}
        >
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <FormLabel>Confirm password</FormLabel>
          <Input
            type="password"
            value={confirm_pass}
            onChange={(e) => Setpass(e.target.value)}
            placeholder="Password"
          />
          <Button onClick={UserRegister} mt={"5px"} type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}
