import React, {useState} from "react";
import Navigation from "../Navigation";
import styled from "styled-components";

const Wrapper = styled.div` 
 padding: 20px;
 `;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${(props)=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const CartScreen = () => {
    return (
        <div>
            <Navigation/>
            <Wrapper/>
                <Title>Your Shopping Cart</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <div>
                        <TopText>Shopping Cart(2)</TopText>
                        <TopText>Wish List(1)</TopText>
                    </div>
                    <TopButton type="filled">Check Out Now! </TopButton>

                </Top>
        </div>
    )
}

export  default CartScreen;