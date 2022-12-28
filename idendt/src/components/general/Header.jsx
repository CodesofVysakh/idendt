import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from "../../assets/images/logo-white.png";


function Header() {
    return (
        <MainContainer>
            <WrapperContainer>
                <LeftBox>
                    <LogoContainer> 
                        <LogoImage src={Logo} alt="Image-Logo"/>
                    </LogoContainer>
                </LeftBox>
                <RightBox>
                    <span>About</span>
                    <span>Services</span>
                    <span>Our Team</span>
                    <span>Contact</span>
                </RightBox>
            </WrapperContainer>
        </MainContainer>
    )
}

export default Header;

const MainContainer = styled.div `
`;
const WrapperContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0;
    width: 90%;
    margin: 0 auto;
`;
const LeftBox = styled.div `
    width: 30%;
`;
const LogoContainer = styled.div `
    width: 200px;
`;
const LogoImage = styled.img `
    width: 100%;
    display: block;
`;
const RightBox = styled.div `
    width: 60%;
    display: flex;
    justify-content: flex-end;

    span{
        margin-left: 15px;
    }
`;