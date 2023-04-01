import {
  Text,
    Box,
    Flex,
    Heading,
    HStack,
    Image,
    Link,
    Stack,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
import React, { useEffect } from 'react';
import { CartItem } from './cartItem';
import { cartData, data1 } from './data'
import { CartOrderSummary } from './orderSummary';
import {useDispatch,useSelector} from "react-redux"
import { deleteCartData, getCartData } from '../../Redux/cartReducer/action';
import loader from '../../Images/loader.gif'
import SliderCrousel from './slickCrousel';
import { DeleteIcon } from '@chakra-ui/icons';


export const Cart = () => {

   const {isLoading,isError,data} = useSelector((store)=>store.cartReducer);
   console.log("store",isLoading,isError,data);
   let length = data?.length;
   const dispatch = useDispatch();
   useEffect(()=>{
    dispatch(getCartData());
   },[]);

   const handelDeleteItem = (id)=>{
      dispatch(deleteCartData(id))
   }

   
    return isLoading?<Image src={loader} h={"150px"} w={"150px"} m={'auto'} mt={"80px"} ></Image>: (
      <>
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
            Shopping Cart "({length} Items)"
          </Heading>
  
          <Stack spacing="6">
            { data?.length>0 && data?.map((item) => {
              return(
                <>
                    <CartItem key={item.id} {...item} />
                </>
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

          <Box w={"80%"}>
            <div id="slider">
                {
                     data1.map((ele,index)=>{
                        return(
                            <SliderCrousel key={index} {...ele} />
                        )
                    })
                }
            </div>
          </Box>

      </>
  )
  }

  export default Cart;