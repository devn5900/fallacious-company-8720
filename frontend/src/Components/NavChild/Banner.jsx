import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <Box bg="#6E7CBB" p={"2"} color="white">
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        gap="3"
        fontSize={"0.9rem"}
      >
        <Text>bold hues, just for you</Text>
        <Text>Bright On Time</Text>
        <Text>
          <Link to={"#"} textDecor={"underline"}>
            shop the rainbow
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Banner;
