import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { userLogin } from "../../Redux/Authreducer/action";
export default function Login() {
  const { load, isAuth, msg, isErr, token } = useSelector(
    (store) => store.AuthReducer
  );
  const dispatch = useDispatch();
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (isAuth) {
    return <Navigate to="/" />;
  }
  const Userlogin = () => {
    const payload = {
      email: email,
      password: password,
    };
    dispatch(userLogin(payload))
      .then((res) => {
        if (res.token) {
          return toast({
            title: res.msg,
            status: "success",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
        } else {
          return toast({
            title: res.msg,
            status: "error",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        console.log("er1");
      });
  };

  return (
    <>
      <Box pt={"2rem"} pb={"2rem"} bg={"#fff"} color={"dodgerblue"}>
        <Heading
          mb={"1rem"}
          color={"doggerblue"}
          textAlign={"center"}
          fontSize={"lg"}
        >
          Login
        </Heading>
        <Box
          boxShadow={"lg"}
          width={"50%"}
          m={"auto"}
          bg="white"
          p={"1rem"}
          borderRadius={"10px"}
        >
          <FormLabel>Email</FormLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <FormLabel>Password</FormLabel>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />

          <Button onClick={Userlogin} mt={"5px"} type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}
