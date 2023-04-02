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
import React, { useEffect, useState } from 'react';
import { CartItem } from './cartItem';
import { CartOrderSummary } from './orderSummary';
import {useDispatch,useSelector} from "react-redux"
import loader from '../../Images/loader.gif'
import Slider from 'react-slick';
import axios from 'axios';
import { getCartData } from '../../Redux/cartReducer/action';


export const Cart = () => {

  const [slider2,setSlider2]=useState([]);
  const {isLoading,isError,data} = useSelector((store)=>store.cartReducer);
  let length = data?.length;
  let totalCost=data?.map((ele)=>(ele.price)).reduce((acc,i)=>acc+i,0);


    const dispatch = useDispatch();
    useEffect(()=>{ 
      dispatch(getCartData());
       axios.get(`https://vast-duck-coat.cyclic.app/products?type=Women`).then((res)=>{
        setSlider2(res.data.data)
       })
  },[])

  const settings2 = {
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


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
                    <CartItem key={item._id} {...item} />
                </>
              )
          })}
          </Stack>
        </Stack>
  
        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary totalCost={totalCost} />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>

    <div className="top-rated" style={{marginBottom:"30px"}}>
              <Heading size={"md"}>You May Also Like</Heading>
              <hr style={{marginTop:"8px"}}/>
              <hr />
            </div>
            <div style={{marginBottom:"-250px",width:"80%"}}>
              <Slider {...settings2}>
              {slider2.map((item) => (
                <div className="slider" >
                  <img className="slide1" src={item.image} alt="" />
                </div>
              ))}
            </Slider>

    </div>

      </>
  )
  }

  export default Cart;