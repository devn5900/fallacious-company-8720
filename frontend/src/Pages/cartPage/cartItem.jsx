import { Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { DeleteIcon } from '@chakra-ui/icons';
import "./cart.css";

export const CartItem = (props)=>{
    const {imageUrl,name,price,discount,design,category} = props;
    const [product,setProduct] = useState(1);
    const addProduct = ()=>{
        setProduct(prev=>prev+1);
    }
    const decProduct = ()=>{
        setProduct(prev=>prev-1);
    }
    return(
        <div id="card">
            <div>
                <img src={imageUrl} alt="image" />
            </div>
            <div style={{marginLeft:"2%"}}>
                <p>{name}</p>
                <Text> {design}</Text>
                <Text> category : {category}</Text>
                <p> Price : $<span style={{color:"red",fontWeight:"bold"}}>{price}</span></p>
                <Heading size={"md"} color={"gold"} fontWeight={"bold"}>{discount}</Heading>
                <Text>Quantity :</Text>
                <div id="butn">
                    <div id="btn">
                        <button disabled={product<=1} onClick={decProduct}>-</button>
                        <button disabled>{product}</button>
                        <button onClick={addProduct}>+</button>
                    </div>
                    <div id="remove">
                        <button><DeleteIcon ml={8} w={8} h={8} border={"1px solid black"} borderRadius={9} p={1} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}