import React from "react";
import { Box } from "@chakra-ui/react";
import Banner from "./NavChild/Banner";
import Lang from "./NavChild/Lang";
import MainNav from "./NavChild/MainNav";
import Links from "./NavChild/Links";
const Navbar = () => {
  return (
    <Box pos={"sticky"} top={"0"} zIndex={"1000"}>
      <Banner />
      <Box bg={"white"}>
        <Lang />
        <MainNav />
        <Links />
      </Box>
    </Box>
  );
};

export default Navbar;
