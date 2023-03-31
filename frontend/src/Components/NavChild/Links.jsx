import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { linkItem } from "./navData";

const Links = () => {
  return (
    <Box p={"3"} borderBottom={"1px solid"} borderColor={"blackAlpha.400"}>
      <Flex gap={2} justifyContent={"space-around"}>
        {linkItem?.map((el) => {
        //   return <Link to="#">{el}</Link>;
        })}
      </Flex>
    </Box>
  );
};

export default Links;
