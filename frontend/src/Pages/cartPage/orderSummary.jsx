import {
    Button,
    Checkbox,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router';
  
  const OrderSummaryItem = (props) => {
    const { label, value, children } = props
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
         <Text fontWeight="medium" color={'black'}>{value}</Text> 
      </Flex>
    )
  }
  
  
  export const CartOrderSummary = ({totalCost}) => {
    const navigate = useNavigate();
    
    const handelChange = (e)=>{
      const {value,checked} = e.target;
    }
    const addPrice = ()=>{
      localStorage.setItem("price",JSON.stringify(totalCost))
    }

    return (
        <>
      <Stack spacing="8" borderWidth="1px" borderColor={'grey'}  padding="8" width="full">
        <Text color={'black'} size="md">Order Summary</Text>
  
        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" value={`₹${totalCost}+₹60`} />
          <OrderSummaryItem label="Shipping + Tax" value={` ₹40 + ₹20 `+" = "+`₹${40+20}`}>
            <Link href="#" textDecor="underline">
              Calculate shipping
            </Link>
          </OrderSummaryItem>
          <Checkbox value={100} onChange={handelChange}>
            <OrderSummaryItem borderWidth={"1px"} label="Coupon Code ₹-100" >
              <Link href="#" textDecor="underline">
                Add coupon code
              </Link>
            </OrderSummaryItem>
          </Checkbox>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
            ₹{totalCost+60}
            </Text>
          </Flex>
        </Stack>
        <Button onClick={()=>{
          navigate("/checkout");
          addPrice();
        }} colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
          Checkout
        </Button>
      </Stack>
        </>
    )
  }