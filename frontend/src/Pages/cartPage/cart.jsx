import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
import React, { useEffect } from 'react';
import { CartItem } from './cartItem';
import { cartData } from './data'
import { CartOrderSummary } from './orderSummary';
import {useDispatch,useSelector} from "react-redux"
import { getCartData } from '../../Redux/cartReducer/action';


export const Cart = () => {

   const {isLoading,isError,data} = useSelector((store)=>store.cartReducer);
   console.log("store",isLoading,isError,data);

   const dispatch = useDispatch();
   useEffect(()=>{
    dispatch(getCartData());
   },[]);

   
    return isLoading?<Heading>Loading...</Heading>: (
      <Box
      maxW={{ base: '3xl', lg: '7xl' }}
      mx="auto"
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
      >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        align={{ lg: 'flex-start' }}
        spacing={{ base: '8', md: '16' }}
        >
        
        <Stack spacing={{ base: '8', md: '10' }} flex="2">
          <Heading fontSize="2xl" fontWeight="">
            Shopping Cart
          </Heading>
  
          <Stack spacing="6">
            { cartData.length>0 && cartData.map((item) => {
              return(
                    <CartItem key={item.id} {...item} />
              )
          })}
          </Stack>
        </Stack>
  
        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  )
  }

  export default Cart;