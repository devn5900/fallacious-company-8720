import {
  Box,
  Flex,
  Grid,
  GridItem,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const LinksFoot = () => {
  const data = [
    {
      title: "Help",
      chlids: [
        "Track Your Order",
        "Start A Return Or Exchange (US + CA)",
        "Returns & Exchanges",
        "Shipping",
        "Customer Service",
        "Current Promotions",
        "Product Recalls",
      ],
    },
    {
      title: "About Us",
      chlids: [
        "Our Story",
        "Events",
        "A Greater Good",
        "Diversity & Inclusion",
        "Stories",
      ],
    },
    {
      title: "Services",
      chlids: [
        "AnthroPerks",
        "Gift Cards",
        "AnthroLiving Designer & Trade Program",
        "Furniture: Guides & Services",
        "Store Pickup & Collection Points",
        "Klarna",
      ],
    },
    {
      title: "Connect",
      chlids: [
        "Contact Us",
        "Stay Connected",
        "Careers",
        "Styling Services",
        "Request A Catalog",
      ],
    },
  ];

  return (
    <Box>
      <Flex p={"2rem"} alignItems={"center"} justifyContent={"space-around"}>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {data?.map((el) => {
            return (
              <GridItem>
                <UnorderedList listStyleType={"none"}>
                  <Text fontWeight={"bold"}>{el.title}</Text>
                  {el?.chlids?.map((el) => {
                    return (
                      <ListItem p={"1"} fontWeight={"thin"}>
                        {el}
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </GridItem>
            );
          })}
        </Grid>
      </Flex>
    </Box>
  );
};

export default LinksFoot;
