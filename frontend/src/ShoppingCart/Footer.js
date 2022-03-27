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
} from "@material-ui/icons";

const Left = styled.div`
    flex: 1;
    `;

const Mid = styled.div`
    flex: 1;
    `;

const Right = styled.div`
    flex: 1;
    `;

const Logo = styled.div``;
const Desc = styled.text``;

const Footer = () => {
    return (
        <div>
            <Left>
                <Logo>
                    <Facebook/>
                </Logo>
                <Desc>
                    Reading makes wisdom.
                </Desc>
            </Left>


        </div>

    );
};

export default Footer;