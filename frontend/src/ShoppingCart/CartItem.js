import styled from "styled-components";
import cartService from "../ShoppingCart/service/frontend-cart-services";
import {Add, Remove} from "@material-ui/icons";
import React from "react";

const Image = styled.img`
    width: 200px;
    height: 300px;
    padding: 20px
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
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
   classname:dropdown
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font=size: 15px;
    margin: 15px;
    font-weight: 200
`;
const ProductPrice = styled.div`
    font-size: 20px;
    font-weight: 200;
    margin: 15px;
`;

const CartItems = (props) => {
    const title = props.book.bookTitle ? props.book.bookTitle : "No Title";

    return (
        <Product>
            <ProductDetail>
                <Image src={props.book.imageURL}/>
                <Details>
                    <ProductName><b>{title}</b></ProductName>
                    <ProductName><b>Author: </b>{props.book.author}</ProductName>

                </Details>
            </ProductDetail>
            <PriceDetail>
                <ProductAmountContainer>
                        <button className="btn btn-#141619 dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            {props.book.bookQuantity}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">0</a></li>
                            <li><a className="dropdown-item" href="#">1</a></li>
                            <li><a className="dropdown-item" href="#">2</a></li>
                        </ul>
                    <ProductAmount>$ {props.book.price}</ProductAmount>
                </ProductAmountContainer>
                <ProductPrice></ProductPrice>
            </PriceDetail>
        </Product>
    )
}

export  default CartItems;