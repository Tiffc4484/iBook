import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Navigation from "../Navigation";
import cartService from "../ShoppingCart/service/frontend-cart-services";
import styled from "styled-components";
import {Add, Remove,} from "@material-ui/icons";
import items from "../DummyData/dummyBooks.json";
import Footer from "./Footer";
import {useParams} from "react-router";
import CartItems from "./CartItem";

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
    flex-direction: column;
    
`;
const ProductName = styled.span`
    padding: 10px;`;

const PriceDetail = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    align-items: center;
`;

const ProductAmountContainer = styled.div`
    margin: 25px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font=size: 24px;
    margin: 5px
`;
const ProductPrice = styled.div`
    font-size: 20px;
    font-weight: 200;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;


const CartScreen = () => {
    const [books, setBooks] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const {username} = useParams()
    const [copies, setCopies] = useState(0);

    useEffect(() => {
        fetch(`/${username}/shopping_cart`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((res) => {
                setBooks(res.data[0].cart);
                let price = 0;
                let copy = 0;
                if (books.length > 0) {
                    books.map((b) => {
                        price += (b.price * b.bookQuantity);
                        copy += b.bookQuantity;
                        console.log(price);
                        price = Math.round(price*100)/100;
                        setTotalPrice(price);
                        setCopies(copy);
                    });
                }
            })
    },[books.length]);


    let cartItems = books.length > 0 && books.map(book => <CartItems username={username} book={book} copy = {copies}/>);
    return (
        <div>
            <Navigation/>
            <Wrapper>
                <Title>Your Shopping Cart</Title>
                <Top>
                    <TopButton>
                        <Link to='/'>Continue Shopping</Link></TopButton>
                    <div>
                        <TopText>Shopping Cart({books.length})</TopText>
                        <TopText>Wish List(1)</TopText>
                    </div>
                    <TopButton type="filled">Check Out Now! </TopButton>
                </Top>

                <Bottom>
                    <Info>
                        <ul>{cartItems}</ul>
                            {/*    <Image src={items[0].volumeInfo.imageLinks.small}></Image>*/}
                            {/*    <Details>*/}
                            {/*        <ProductName><b>Name: </b>The Google Story</ProductName>*/}
                            {/*        <ProductName><b>Author: </b>{items[0].volumeInfo.authors}</ProductName>*/}

                            {/*    </Details>*/}
                            {/*<PriceDetail>*/}
                            {/*    <ProductAmountContainer>*/}
                            {/*        <Add/>*/}
                            {/*        <ProductAmount>2</ProductAmount>*/}
                            {/*        <Remove/>*/}
                            {/*    </ProductAmountContainer>*/}
                            {/*    <ProductPrice>$ {items[0].saleInfo.listPrice.amount}</ProductPrice>*/}
                            {/*</PriceDetail>*/}
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount </SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
                    </SummaryItem>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </div>
    )
}

export  default CartScreen;