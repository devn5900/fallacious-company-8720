import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const AccessoriesProductsCard = ({
  id,
  name,
  price,
  image,
  description,
  brand,
  rating,
  offer,
}) => {
  let offerPresent = parseInt(offer);
  let discountMoney = (price * offerPresent) / 100;
  let finalPrice = price + discountMoney;

  return (
    <Flex p={5} w="sm" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        w="98%"
        borderWidth="1px"
        borderTop={"0px"}
        rounded="md"
        shadow="md"
      >
        <Link to={`/accessories/${id}`}>
          <Image
            src={image}
            w={"sm"}
            alt={`Picture of ${name}`}
            roundedTop="lg"
          />
          <Badge colorScheme="gray" mt={-20} mr={"100%"}>
            {rating}⭐
          </Badge>

          <Box p="3">
            <Box alignItems="baseline" mt={-25}>
              <Badge
                rounded="full"
                fontSize="0.8em"
                colorScheme="yellow"
                mr={"100%"}
                variant={"solid"}
                color={"black"}
              >
                {brand}
              </Badge>
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="lg"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {name}
              </Box>
            </Flex>
            <Box
              fontSize={"11px"}
              textAlign={"left"}
              fontWeight={"bold"}
              color={"gray.500"}
            >
              <Text>{description.slice(0, 50)}</Text>
            </Box>
            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="xl" color={useColorModeValue("gray.800", "white")}>
                <Box as="span" fontSize="xl" color={"gray.600"}>
                  ₹
                </Box>
                {`${price.toFixed(2)}`}
                <Badge
                  ml="2"
                  fontSize={"md"}
                  colorScheme="red"
                  mb={2}
                  textDecoration={"line-through"}
                >
                  ₹ {Math.floor(finalPrice)}
                </Badge>
                <Badge ml="3" fontSize={"md"} mb={2}>
                  {offer}
                </Badge>
              </Box>
            </Flex>
          </Box>
        </Link>
      </Box>
    </Flex>
  );
};

export default AccessoriesProductsCard;
