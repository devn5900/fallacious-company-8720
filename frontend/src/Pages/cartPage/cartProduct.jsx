import {
    Box,
    HStack,
    Icon,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import { FiGift } from 'react-icons/fi'
  
//   export type CartProductMetaProps = {
//     isGiftWrapping?: boolean
//     name: string
//     description: string
//     image: string
//   }
  
  export const CartProductMeta = (props) => {
    const { isGiftWrapping = true, image, name, description } = props
    return (
      <Stack direction="row" spacing="5" width="full">
        <Image
          rounded="md"
          width="70%"
          height="60%"
          fit="cover"
          src={image}
          alt={name}
          draggable="false"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="1">
            <Text fontWeight="medium">{name}</Text>
            <Text color={mode('gray.800', 'gray.600')} fontSize="lg">
              {description}
            </Text>
          </Stack>
          {isGiftWrapping && (
            <HStack spacing="3" mt="5" color={mode('gray.800', 'gray.600')}>
              <Icon as={FiGift} boxSize="7" />
              <Link fontSize="m" textDecoration="underline">
                Add gift wrapping
              </Link>
            </HStack>
          )}
        </Box>
      </Stack>
    )
  }