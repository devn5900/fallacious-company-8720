import { Box, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { BsPinterest, BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
const FootIcons = () => {
  return (
    <Box>
      <Flex
        p={"2rem"}
        gap={"10"}
        fontSize={"1.5rem"}
        color={"#6E7CBB"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Icon as={BsPinterest} />
        <Icon as={AiFillInstagram} />
        <Icon as={BsFacebook} />
        <Icon as={AiFillTwitterCircle} />
      </Flex>
    </Box>
  );
};

export default FootIcons;
