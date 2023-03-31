import {
  Badge,
  Box,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../Images/logo.png";
import { CiSearch } from "react-icons/ci";
import { BsBagHeart } from "react-icons/bs";

const MainNav = () => {
  return (
    <Box borderBottom={"1px solid"} borderColor={"blackAlpha.300"}>
      <Flex
        justifyContent={"space-between"}
        w={"90%"}
        m={"auto"}
        alignItems={"center"}
      >
        <Flex
          borderTop={"2px solid darkblue"}
          p={"1"}
          fontSize={"1.7rem"}
          alignItems={"center"}
          borderLeft={"1px solid #C3CBCF"}
          borderRight={"1px solid #C3CBCF"}
        >
          {/* <Image src={logo} w={"6rem"} /> border={"3px solid #EDA565"} */}
          <Text>Fas</Text>
          <Text borderRadius={"full"} p={"0.2rem"}>
            <Flex>
              {" "}
              <Text borderLeft={"3px solid #EDA565"}>|</Text>-
              <Text borderRight={"3px solid #EDA565"}>|</Text>
            </Flex>
          </Text>
          <Text>ion</Text>&nbsp;<Text>St</Text>
          <Text
            border={"3px solid #EDA565"}
            borderRadius={"full"}
            p={"1rem"}
          ></Text>
          <Text>re</Text>
        </Flex>
        <Flex>
          <Flex gap={"9"} alignItems={"center"}>
            <Box>
              <InputGroup size="md">
                <Input
                  type="text"
                  p={"1.3rem"}
                  pl={"1.5rem"}
                  pr={"1.5rem"}
                  fontSize={"0.9rem"}
                  placeholder="Search Fashion Store"
                />
                <InputRightElement>
                  <Icon as={CiSearch} fontSize={"1.5rem"} cursor={"pointer"} />
                </InputRightElement>
              </InputGroup>
            </Box>
            <Box pos={"relative"}>
              <Icon
                as={BsBagHeart}
                fontSize={"1.9rem"}
                color={"#6E7CBB"}
                cursor={"pointer"}
              />
              <Badge
                pos={"absolute"}
                top={"0"}
                right={"-1"}
                bg="#6E7CBB"
                color={"white"}
              >
                0
              </Badge>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainNav;
