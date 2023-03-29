import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import DummyComponents from "../../Components/ProductPage/DummyComponents";
import SideBar from "../../Components/ProductPage/SideBar";
const Mens = () => {
  return (
    <Box>
      <Flex direction={["column", "row"]}>
        <Box
          w={["100%", "20%", "15%"]}
          ml={["50px", "15px"]}
          borderRight={["0px", "1px solid gray", "1px solid gray"]}
        >
          <SideBar />
        </Box>
        <Box
          w={["100%", "80%", "85%"]}
          display="grid"
          gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr 1fr"]}
          ml={[5, 5, 10, 20, 20]}
          mr={[5, 5, 10, 20, 20]}
          gap="10"
        >
          <DummyComponents /> <DummyComponents /> <DummyComponents />{" "}
          <DummyComponents /> <DummyComponents /> <DummyComponents />{" "}
          <DummyComponents /> <DummyComponents /> <DummyComponents />{" "}
          <DummyComponents /> <DummyComponents /> <DummyComponents />
        </Box>
      </Flex>
    </Box>
  );
};

export default Mens;
