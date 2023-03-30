import React from "react";
import { Box } from "@chakra-ui/react";
import Banner from "./NavChild/Banner";
import Lang from "./NavChild/Lang";
import MainNav from "./NavChild/MainNav";
import Links from "./NavChild/Links";
const Navbar = () => {
  return (
    <Box>
      <Banner />
      <Lang />
      <MainNav />
      <Links />
    </Box>
  );
};

export default Navbar;
