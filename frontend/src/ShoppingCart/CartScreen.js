import React, {useState} from "react";
import Navigation from "../Navigation";
import styled from "styled-components";

import items from "../DummyData/dummyBooks.json";

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
    background-color: ${(props)=>props.type === "filled" ? "#98bae7" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;

`;

const Summary = styled.div`
    flex: 1;
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
    height: 300px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    
`;
const ProductName = styled.span``;
const PriceDetail = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`;
const ProductAmount = styled.div`
    font=size: 24px;
    margin: 5px
`;
const ProductPrice = styled.div``;

const CartScreen = () => {
    return (
        <div>
            <Navigation/>
            <Wrapper>
                <Title>Your Shopping Cart</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <div>
                        <TopText>Shopping Cart(2)</TopText>
                        <TopText>Wish List(1)</TopText>
                    </div>
                    <TopButton type="filled">Check Out Now! </TopButton>
                </Top>

                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src={items[0].volumeInfo.imageLinks.small}></Image>
                                <Details>
                                    <ProductName><b>The Google Story</b></ProductName>

                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    {/*<Add/>*/}
                                    <ProductAmount>2</ProductAmount>
                                    {/*<Remove/>*/}
                                </ProductAmountContainer>
                                <ProductPrice>$ {items[0].saleInfo.listPrice.amount}</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        Summary
                    </Summary>
                </Bottom>
            </Wrapper>
        </div>
    )
}

export  default CartScreen;