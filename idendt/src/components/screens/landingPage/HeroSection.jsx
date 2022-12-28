import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <MainContainer>
        <WrapperContainer>
            <Title>
                BRANDING & BEYOND
            </Title>
            <SubTitle>
                Step by step, Brick by brick, We’ll help you build your brand
            </SubTitle>
            <IdentifyButton>
                Get Identified
            </IdentifyButton>
        </WrapperContainer>
    </MainContainer>
  )
}

export default HeroSection;

const MainContainer = styled.div `
    height: calc(100vh - 150px);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const WrapperContainer = styled.div `
    width: 80%;
    margin: 0 auto;
    text-align: center;
`;
const Title = styled.h3 `
    font-size: 38px;
    margin-bottom: 15px;
    `;
const SubTitle = styled.h5 `
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 25px;
`;
const IdentifyButton = styled.div `
    border-right: 2.5px solid #fff;
    border-bottom: 2.5px solid #fff;
    width: fit-content;
    padding: 8px;
    font-size: 25px;
    margin: 0 auto;
`;