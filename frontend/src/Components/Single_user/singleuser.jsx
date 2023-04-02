import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  useToast,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../Redux/cartReducer/action";
export default function Singleuser() {
  const { id } = useParams();
  const [data, setdata] = useState({});
  const toast = useToast();
  const dispatch = useDispatch();
  const {
    name,
    category,
    brand,
    description,
    discount,
    design,
    offer,
    rating,
    price,
    image,
    type,
    tags,
  } = data;
  useEffect(() => {
    console.log("hello");
    fetch(`https://vast-duck-coat.cyclic.app/products/${id}`)
      .then((res) => res.json())
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);
  const addToCartFun = (data) => {
    dispatch(AddToCart(data))
      .then((res) => {
        console.log(res.msg);
        if (res.msg.includes("Added")) {
          return toast({
            title: res.msg,
            status: "success",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
        } else {
          return toast({
            title: res.msg,
            status: "warning",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        return toast({
          title: "Something wen wrong",
          status: "warning",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      });
  };
  return (
    <div>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={image}
              align={"center"}
              w={"100%"}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {name}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                ₹{price}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text fontSize={"lg"}>{description}</Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Features
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List textAlign={"center"} spacing={2}>
                    <ListItem
                      w={"50%"}
                      fontWeight={"bold"}
                      bg={"green.200"}
                      color={"black"}
                    >
                      {offer}
                    </ListItem>
                    <ListItem
                      w={"50%"}
                      fontWeight={"bold"}
                      bg={"green.200"}
                      color={"black"}
                    >
                      {discount}
                    </ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Brand:
                    </Text>
                    {brand}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Gender:
                    </Text>
                    {type}
                  </ListItem>

                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Category:
                    </Text>
                    {category}
                  </ListItem>
                </List>
              </Box>
            </Stack>

            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={() => {
                addToCartFun(data);
              }}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </div>
  );
}
