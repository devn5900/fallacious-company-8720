import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { linkItem } from "./navData";

const Links = () => {
  return (
    <Box>
      <Flex gap={2} justifyContent={"space-around"}>
        {linkItem?.map((el) => {
          return <Link to="#">{el}</Link>;
        })}
      </Flex>
    </Box>
  );
};

export default Links;
