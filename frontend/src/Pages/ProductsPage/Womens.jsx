import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";

import SideBar from "../../Components/ProductPage/SideBar";
import { getWomensData } from "../../Redux/productReducer/action";
import { useDispatch, useSelector } from "react-redux";
import MensProductsCard from "../../Components/ProductPage/MensProductsCard";
import { useLocation, useSearchParams } from "react-router-dom";
const Womens = () => {
  // this hook will return you the url
  const location = useLocation();
  // console.log(location);
  const { data, isError, isLoading } = useSelector(
    (store) => store.productReducer
  );
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  let obj = {
    params: {
      category: searchParams.getAll("category"),
      sort: searchParams.get("order") && "price",
      order: searchParams.get("order"),
      // sort: searchParams.get("order") && "rating",
      // order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getWomensData(obj));
  }, [location.search]);
  ///
  // console.log(data, "data redux");

  return (
    <Box>
      <Flex direction={["column", "row"]}>
        <Box
          w={["80%", "20%", "15%"]}
          pl={["auto", "5"]}
          mr={["auto", "auto"]}
          borderRight={["0px", "1px solid gray", "1px solid gray"]}
        >
          <SideBar />
        </Box>
        <Box
          w={["90%", "78%", "82%"]}
          display="grid"
          gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr 1fr"]}
          ml={["auto", "auto"]}
          mr={["auto", "auto"]}
          gap="auto"
        >
          {data.length > 0 &&
            data.map((e) => <MensProductsCard key={e._id} {...e} />)}
        </Box>
      </Flex>
    </Box>
  );
};

export default Womens;
