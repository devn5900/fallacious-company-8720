import {
  Badge,
  Box,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  ListItem,
  Spinner,
  Text,
  Link,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import logo from "../../Images/logo.png";
import { CiSearch } from "react-icons/ci";
import { BsBagHeart } from "react-icons/bs";
import { Link as ReachLink } from "react-router-dom";
import useThrottle from "../../Hooks/useThrottle";
import { searchItem } from "../../Utils/api";

const MainNav = () => {
  const [search, setSearch] = useState("");
  const [mapSearch, setMapSearch] = useState([]);
  const query = useThrottle(search, 500);
  const [load, setLoad] = useState(false);
  const searchFunc = (e) => {
    let inp = e.target.value;
    if (inp !== search) {
      setSearch(inp);
    }
  };

  useEffect(() => {
    if (search === "") {
      setMapSearch([]);
      setSearch("");
    } else {
      setLoad(true);
      fetchSearch(query);
    }

    return () => {
      setMapSearch([]);
    };
  }, [query]);

  const fetchSearch = (query) => {
    searchItem(query)
      .then((res) => {
        const val = res?.reduce((acc, el) => {
          let obj = {};
          obj.title = el.name.split(" ").splice(0, 5).join(" ");
          obj._id = el._id;
          obj.image = el.image;
          acc.push(obj);
          return acc;
        }, []);
        if (query === "") {
          setMapSearch([]);
        } else {
          setMapSearch(val);
        }
        setLoad(false);
      })
      .catch((e) => {
        setLoad(false);
      });
  };
  return (
    <Box borderBottom={"1px solid"} borderColor={"blackAlpha.300"}>
      <Flex
        justifyContent={["", "space-evenly", "space-between"]}
        w={"90%"}
        m={"auto"}
        gap={["1", ""]}
        direction={["column-reverse", "column-reverse", "row"]}
        alignItems={["", "space-around", "center"]}
      >
        <Flex
          borderTop={"2px solid darkblue"}
          p={"1"}
          fontSize={["1.3rem", "1.7rem"]}
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
          <Flex
            gap={"9"}
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"100%"}
          >
            <Box pos={"relative"}>
              <Box>
                <InputGroup size="md">
                  <Input
                    type="text"
                    p={"1.3rem"}
                    pl={"1.3rem"}
                    pr={"1.5rem"}
                    htmlSize={30}
                    fontSize={"0.9rem"}
                    placeholder="Search by Category, Name, Type ..."
                    onChange={searchFunc}
                  />
                  <InputRightElement>
                    <Icon
                      as={load ? Spinner : CiSearch}
                      fontSize={"1.5rem"}
                      cursor={"pointer"}
                      bg={"white"}
                      pl={"1"}
                    />
                  </InputRightElement>
                </InputGroup>
              </Box>
              {!load && search && mapSearch?.length > 0 ? (
                <Box
                  pos={"absolute"}
                  bg={"white"}
                  pl={"1"}
                  pr={"1"}
                  border={"1px solid"}
                  borderColor={"blackAlpha.300"}
                  maxH={"20rem"}
                  overflow={"scroll"}
                  css={{
                    "&::-webkit-scrollbar": {
                      width: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                      width: "6px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#8ccef0",
                      borderRadius: "24px",
                    },
                  }}
                >
                  {mapSearch?.map((el) => {
                    return (
                      <Link
                        as={ReachLink}
                        key={Math.random() * 100 + 4}
                        to={`/product/${el.id}/details`}
                      >
                        <Flex
                          onClick={() => {
                            setMapSearch([]);
                            setSearch("");
                          }}
                          alignItems={"center"}
                          mt={"0.2rem"}
                          bg={"blackAlpha.50"}
                          _hover={{ bg: "#E3E9ED" }}
                          cursor={"pointer"}
                          borderRadius={"sm"}
                          overflow={"hidden"}
                        >
                          <Box w={"13%"}>
                            <Image src={el.image} w={"fit-content"} />
                          </Box>
                          <Box ml={"0.2rem"}>
                            <Text textAlign={"start"} fontSize={"0.9rem"}>
                              {el.title.trim()}
                            </Text>
                          </Box>
                        </Flex>
                      </Link>
                    );
                  })}
                </Box>
              ) : (
                ""
              )}
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
