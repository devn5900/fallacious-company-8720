import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const SngleProductSkeleton = () => {
  return (
    <div>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Skeleton w={"90%"} h={"60vh"} />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Skeleton h={"3rem"} />
              <br />
              <Skeleton h={"1rem"} />
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={<StackDivider />}
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Skeleton w={"80%"} h="2rem" />
              </VStack>
              <Box>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <Skeleton w={"80%"} h="2rem" />
                  <Skeleton w={"80%"} h="2rem" />
                </SimpleGrid>
              </Box>
              <Box>
                <Skeleton w={"80%"} h="2rem" />
                <Skeleton w={"80%"} h="2rem" />
                <Skeleton w={"80%"} h="2rem" />
              </Box>
            </Stack>

            <Skeleton />
          </Stack>
        </SimpleGrid>
      </Container>
      %
    </div>
  );
};

export default SngleProductSkeleton;
