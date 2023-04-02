import { Box, Flex, Icon, Link, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { linkItem } from "./navData";
import NavLinks from "./NavLinks";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
const Links = () => {
  const [icon, setIcon] = useState(false);
  const [isBig, isBrowser] = useMediaQuery([
    "(min-width: 767px)",
    "(display-mode: browser)",
  ]);
  const [isOpen, setOpen] = useState(isBig);
  useEffect(() => {
    setOpen(isBig);
  }, [isBig]);
  return (
    <Box borderBottom={"1px solid"} borderColor={"blackAlpha.400"}>
      <Box
        p={"2"}
        onClick={() => {
          setIcon(!icon);
          setOpen(!isOpen);
        }}
        display={["block", "block", "none"]}
      >
        <Icon as={icon ? CloseIcon : HamburgerIcon} fontSize={"1.3rem"} />
      </Box>
      <Flex
        gap={2}
        display={!isOpen ? "none" : "flex"}
        direction={["column", "column", "row"]}
        justifyContent={["", "", "space-evenly"]}
      >
        {linkItem?.map((el) => {
          return (
            <NavLinks
              key={Date.now() + Math.random() * 1}
              title={el.title}
              link={el?.link ? el?.link : "#"}
              child={el.child}
            />
          );
        })}
      </Flex>
    </Box>
  );
};

export default Links;
