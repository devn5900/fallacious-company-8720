import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { SlGlobeAlt } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { Link as ReachLink } from "react-router-dom";
const Lang = () => {
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
        </Flex>
      </Flex>
    </Box>
  );
};

export default Lang;
