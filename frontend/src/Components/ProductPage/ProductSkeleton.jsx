import {
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const ProductSkeleton = () => {
  return (
    <Box>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={10}
        ml="5"
        mr="5"
      >
        <Box>
          <Skeleton>
            <Box h="400">a</Box>
          </Skeleton>
          <Stack mt="1rem">
            <Skeleton height="30px" />
            <Skeleton height="30px" />
            <Skeleton height="30px" />
          </Stack>
        </Box>
        <Box>
          <Skeleton>
            <Box h="400">a</Box>
          </Skeleton>
          <Stack mt="1rem">
            <Skeleton height="30px" />
            <Skeleton height="30px" />
            <Skeleton height="30px" />
          </Stack>
        </Box>
        <Box>
          <Skeleton>
            <Box h="400">a</Box>
          </Skeleton>
          <Stack mt="1rem">
            <Skeleton height="30px" />
            <Skeleton height="30px" />
            <Skeleton height="30px" />
          </Stack>
        </Box>
      </Grid>
    </Box>
  );
};

export default ProductSkeleton;
/* <GridItem>
          <Card boxShadow="md">
            <CardBody>
              <Skeleton height="20rem" />
              <Skeleton width="370px" />
              <Skeleton width="370px" />
              <Skeleton width="370px" />
              <Stack mt="1rem">
                <Skeleton height="30px" />
                <Skeleton height="30px" />
                <Skeleton height="30px" />
              </Stack>
            </CardBody>
          </Card>
        </GridItem> */
