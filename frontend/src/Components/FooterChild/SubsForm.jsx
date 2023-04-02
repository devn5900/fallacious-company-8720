import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SubsForm = () => {
  return (
    <Box borderBottom={"1px solid lightgray"} mt={"3rem"}>
      <Flex p={"2rem"} alignItems={"center"} justifyContent={"space-around"}>
        <Box>
          <Heading fontWeight={"thin"}>Sign Up for Email</Heading>
          <Text fontWeight={"thin"}>
            Receive early access to new arrivals, sales, exclusive content,
            events and much more!
          </Text>
        </Box>
        <Box>
          <InputGroup>
            <Input
              border={"2px solid "}
              borderColor={"#6E7CBB"}
              type="email"
              placeholder="Enter Your Email"
              p={"6"}
            />
            <InputRightAddon
              p={"6"}
              bg={"#6E7CBB"}
              cursor={"pointer"}
              border={"2px solid "}
              borderColor={"#6E7CBB"}
              color={"white"}
              children="SUBMIT"
            />
          </InputGroup>
        </Box>
      </Flex>
    </Box>
  );
};

export default SubsForm;
