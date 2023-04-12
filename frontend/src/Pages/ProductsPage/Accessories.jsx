import { Box, Button, Flex, HStack, Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

import { getAccessoriesData } from "../../Redux/productReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import ProductSkeleton from "../../Components/ProductPage/ProductSkeleton";
import AccessoriesSlider from "../../Components/ProductPage/AccessoriesSlider";
import AccessoriesProductsCard from "../../Components/ProductPage/AccessoriesProductsCard";
// import { getCartData } from "../../Redux/cartReducer/action";

const Accessories = () => {
  // for pagination
  const [searchParams, setSearchParams] = useSearchParams();
  const initPage = searchParams.get("page");
  const [page, setPage] = React.useState(initPage || 1);
  //scroll button state
  const [showButton, setShowButton] = useState(false);
  // this hook will return you the url
  const location = useLocation();

  /*
    to handle pagination 
  */
  const handlePage = (val) => {
    setPage((prev) => Number(prev) + val);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", Number(page) + val);
    const newSearchString = searchParams.toString();
    const newPathname = location.pathname;
    const newUrl = `${newPathname}?${newSearchString}`;
    window.history.pushState(null, "", newUrl);
  };

  const { data, isError, isLoading } = useSelector(
    (store) => store.productReducer
  );

  const dispatch = useDispatch();
  let obj = {
    params: {
      category: searchParams.getAll("category"),
      sort: searchParams.get("order") && "price",
      order: searchParams.get("order"),
      page: page,
    },
  };

  React.useEffect(() => {
    // below function will called every time whenever anything will change on url
    // dispatch(getCartData());

    dispatch(getAccessoriesData(obj));

    return () => {};
  }, [location.search, page]);
  //scroll to top button logic

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //scroll to top button event
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Box>
      <Flex direction={["column", "row"]}>
        <Box
          w={["80%", "20%", "15%"]}
          pl={["auto", "5"]}
          mr={["auto", "auto"]}
          borderRight={["0px", "1px solid gray", "1px solid gray"]}
        >
          <AccessoriesSlider page={page} />
        </Box>
        {isLoading ? (
          <Box w={["90%", "78%", "82%"]}>
            <ProductSkeleton />
          </Box>
        ) : isError ? (
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Heading>🤔Some issue in API while fetching data</Heading>
          </Flex>
        ) : (
          <Box w={["90%", "78%", "82%"]}>
            <Box
              display="grid"
              gridTemplateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr 1fr"]}
              ml={["auto", "auto"]}
              mr={["auto", "auto"]}
              gap="auto"
              overflow="hidden"
            >
              {data.length > 0 &&
                data.map((e) => <AccessoriesProductsCard key={e._id} {...e} />)}
            </Box>
            <HStack justifyContent={"center"}>
              <Button
                colorScheme="facebook"
                isDisabled={page == 1}
                onClick={() => handlePage(-1)}
              >
                prev
              </Button>
              <Button colorScheme="facebook">{page}</Button>
              <Button
                colorScheme="facebook"
                onClick={() => handlePage(1)}
                isDisabled={data.length < 15}
              >
                next
              </Button>
            </HStack>
            {showButton && (
              <IconButton
                aria-label="scroll to top"
                icon={<FaArrowUp />}
                onClick={handleScrollToTop}
                position="fixed"
                bottom="6"
                right="6"
                rounded={"full"}
                colorScheme="facebook"
              />
            )}
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Accessories;
