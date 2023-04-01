import React from "react";
import { Box } from "@chakra-ui/react";
import SubsForm from "./FooterChild/SubsForm";
import LinksFoot from "./FooterChild/LinksFoot";
import FootIcons from "./FooterChild/FootIcons";

const Footer = () => {
  return (
    <Box bg={"blackAlpha.50"}>
      <SubsForm />
      <LinksFoot />
      <FootIcons />
    </Box>
  );
};

export default Footer;
