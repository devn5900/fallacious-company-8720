import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";

import SideBar from "../../Components/ProductPage/SideBar";
import { getMensData } from "../../Redux/productReducer/action";
import { useDispatch, useSelector } from "react-redux";
import MensProductsCard from "../../Components/ProductPage/MensProductsCard";
const Mens = () => {
  const dispatch = useDispatch();
  const { data, isError, isLoading } = useSelector(
    (store) => store.productReducer
  );
  console.log(data, "data redux");
  useEffect(() => {
    dispatch(getMensData());
  }, [dispatch]);
  return (
    <Box>
      <Flex direction={["column", "row"]}>
        <Box
          w={["100%", "20%", "15%"]}
          ml={["50px", "15px"]}
          borderRight={["0px", "1px solid gray", "1px solid gray"]}
        >
          <SideBar />
        </Box>
        <Box
          w={["100%", "80%", "85%"]}
          display="grid"
          gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr 1fr"]}
          ml={[5, 5, 10, 20, 20]}
          mr={[5, 5, 10, 20, 20]}
          gap="10"
        >
          {data.length > 0 &&
            data.map((e) => <MensProductsCard key={e._id} {...e} />)}
        </Box>
      </Flex>
    </Box>
  );
};

export default Mens;
