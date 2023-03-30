import React from "react";
import { Flex, Text, Image, HStack, VStack } from "@chakra-ui/react";
const DummyComponents = () => {
  /*
    {
"name": "Men's Purple Justice League Society Graphic Printed Oversized T-shirt",
"category": "T-Shirt",
"price": 499,
"design": "Graphic Print",
"image": "https://images.bewakoof.com/t640/men-s-purple-justice-league-society-graphic-printed-oversized-t-shirt-581274-1676971303-1.jpg",
"type": "Men",
"offer": "14% OFF",
"brand": "Boogy®",
"discount": "66% OFF",
"tags": [
  {
    "type": "fit",
    "label": "OVERSIZED FIT",
    "bgColor": "rgba(82, 82, 82, 0.8)",
    "textColor": "#fff"
  }
],
"description": "For TriBe Members official dc comics merchandise by bewakoof.com Men's Purple Justice League Society Graphic Printed Oversized T-shirt Men's Purple Justice League Society Graphic Printed Oversized T-shirt",
"rating": "1.3"
    */
  return (
    <VStack
      // onClick={() => navigate(`/deal/${id}`)}
      _hover={{ border: "1px solid #24a3b5" }}
      fontFamily={"Roboto, Arial, Helvetica, sans-serif"}
      padding={3}
      pt={6}
      pb={10}
      bg={"white"}
      alignContent={"flex-start"}
      justifyContent={"left"}
      textAlign={"left"}
    >
      <Image
        // _hover={{ transform: "scale(1.1)" }}
        w={"50%"}
        // h={"180px"}
        src="https://images.bewakoof.com/t640/men-s-purple-justice-league-society-graphic-printed-oversized-t-shirt-581274-1676971303-1.jpg"
        alt="img"
      />

      <Flex justifyContent={"left"} mt={20}>
        <Text
          overflow="hidden"
          whiteSpace="nowrap"
          color="#757575"
          lineHeight={"normal"}
          fontSize={"20px"}
        >
          Men's Purple Justice League Society
        </Text>
        <Text as="span" fontSize="md" color="gray.500" ml={1}>
          ...
        </Text>
      </Flex>
      <HStack>
        <Text fontSize={"20px"}>300 {/* {real_price} */}</Text>
        <Text fontSize={"20px"} color={"gray"} textDecoration={"line-through"}>
          ₹499 {/* {price} */}
        </Text>
        <Text fontSize={"20px"} color={"#24a3b5"}>
          66% OFF {/* {discount} */}
        </Text>
      </HStack>
    </VStack>
  );
};

export default DummyComponents;
