import React from "react";
import {
  Box,
  Flex,
  Link,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const NavLinks = ({ title, child }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   console.log(child);
  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton
        onMouseEnter={onOpen}
        _hover={{ borderBottom: "2px solid #6E7CBB" }}
        onMouseLeave={onClose}
      >
        <Link as={ReachLink} to={"/men"}>
          <Text fontSize={"0.9rem"} p={"4"}>
            {title}
          </Text>
        </Link>
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        <MenuItem cursor={"default"} _hover={{ bg: "white" }}>
          <Box p="1rem">
            <Flex gap={"2rem"} direction={["column", "column", "row"]}>
              {child?.map((el) => {
                return (
                  <List spacing={2} key={Math.random() * 100}>
                    <Text fontSize={"1.1rem"}>{el.title}</Text>
                    {el?.childs?.map((ele) => {
                      return (
                        <ListItem key={Math.random() * 100 + 1}>
                          <Text
                            cursor={"pointer"}
                            color={"blackAlpha.700"}
                            fontSize={"0.8rem"}
                          >
                            {ele}
                          </Text>
                        </ListItem>
                      );
                    })}
                  </List>
                );
              })}
            </Flex>
          </Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavLinks;
