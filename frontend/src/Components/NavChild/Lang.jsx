import { Box, Flex, Icon, Image, Link, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { SlGlobeAlt } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { Link as ReachLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../Redux/Authreducer/action";
const Lang = () => {
  const { isAuth, name, msg, avatar } = useSelector(
    (store) => store.AuthReducer
  );
  const dispatch = useDispatch();
  const toast = useToast();
  const logout = () => {
    dispatch(logOutUser());
    localStorage.setItem("token", "");
    localStorage.setItem("name", "");
    localStorage.setItem("avatar", "");
    return toast({
      title: "You are Loggedout !",
      status: "warning",
      position: "top",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <Box bg={"#F7F6F2"}>
      <Flex justifyContent={"flex-end"} p="2" w={"90%"} gap={"3"}>
        <Flex alignItems={"center"} gap={"2"} cursor={"pointer"}>
          <Icon fontSize={"1.2rem"} color={"#167A92"} as={SlGlobeAlt} />
          <Text fontSize={"0.8rem"} color={"#167A92"}>
            English ($)
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={"2"} cursor={"pointer"}>
          {isAuth ? (
            <>
              <Icon fontSize={"1.2rem"} color={"#167A92"} as={FaRegUser} />
              <Text fontSize={"0.8rem"} color={"#167A92"}>
                <Link as={ReachLink} to="#">
                  {name}&nbsp;
                </Link>
                /&nbsp;
                <Link as={ReachLink} to="#" onClick={logout}>
                  logout
                </Link>
              </Text>
            </>
          ) : (
            <>
              <Icon fontSize={"1.2rem"} color={"#167A92"} as={FaRegUser} />
              <Text fontSize={"0.8rem"} color={"#167A92"}>
                <Link as={ReachLink} to="/login">
                  Sign In
                </Link>
                /
                <Link as={ReachLink} to="/register">
                  Sign Up
                </Link>
              </Text>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Lang;
