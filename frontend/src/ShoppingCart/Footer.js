import styled from "styled-components";
import React from "react";
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
    GitHub
} from "@material-ui/icons";

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    `;


const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
    `;

const SocialContainer = styled.div`
    display: flex;`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Mid = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    `;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>
                    iBook.
                </Logo>

                <Desc>
                    Books have the power to transport us to new worlds and different times,
                    but they can also take us back to the important moments in our own lives.
                </Desc>

                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Mid>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home Page</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Local Events</ListItem>
                    <ListItem>Wish List</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Google Books</ListItem>
                    <ListItem>Amazon</ListItem>
                </List>
            </Mid>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: "10px"}}/> Northeastern University, San Jose, 95131
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}}/> +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: "10px"}}/> xyz@northeastern.edu
                </ContactItem>
                <ContactItem>
                    <GitHub style={{marginRight: "10px"}}/> iBook
                </ContactItem>
            </Right>


        </Container>

    );
};

export default Footer;