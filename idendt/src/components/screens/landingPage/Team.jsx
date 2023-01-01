import React from 'react';
import styled from 'styled-components';
import Gallery1 from '../../../assets/images/heroSectionImages/gallery1.jpeg';
import Gallery2 from '../../../assets/images/heroSectionImages/gallery2.jpeg';
import Gallery3 from '../../../assets/images/heroSectionImages/gallery3.jpeg';
import Gallery4 from '../../../assets/images/heroSectionImages/gallery4.jpeg';
import Gallery5 from '../../../assets/images/heroSectionImages/gallery5.jpeg';
import Gallery6 from '../../../assets/images/heroSectionImages/gallery6.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faLink } from "@fortawesome/free-solid-svg-icons";

function Team() {
    const teamData = [
        {
            "id" : 1,
            "image" : Gallery1,
            "title" : "Name 1",
            "linkedin" : "https://linkedin.com"
        },
        {
            "id" : 2,
            "image" : Gallery2,
            "title" : "Name 2",
            "linkedin" : "https://linkedin.com"
        },
        {
            "id" : 3,
            "image" : Gallery3,
            "title" : "Name 3",
            "linkedin" : "https://linkedin.com"
        },
        {
            "id" : 4,
            "image" : Gallery4,
            "title" : "Name 4",
            "linkedin" : "https://linkedin.com"
        },
        {
            "id" : 5,
            "image" : Gallery5,
            "title" : "Name 5",
            "linkedin" : "https://linkedin.com"
        },
        {
            "id" : 6,
            "image" : Gallery6,
            "title" : "Name 6",
            "linkedin" : "https://linkedin.com"
        },
    ];
    return (
        <MainContainer>
            <WrapperContainer>
                <Title>OUR TEAM</Title>
                <ImageGallery>
                    {teamData.map((item) => (
                        <ImageContainer>
                            <img src={item.image} alt="Image" />
                            <BottomContent>
                                <ContentHeading>{item.title}</ContentHeading>
                                <ContentDescription href={item.linkedin} target="_blank" >
                                    <FontAwesomeIcon icon={faLink}/>   
                                </ContentDescription>
                            </BottomContent>
                        </ImageContainer>
                    ))}
                </ImageGallery>
            </WrapperContainer>
        </MainContainer>
    )
}

export default Team;

const MainContainer = styled.div `
    /* height: calc(100vh - 220px); */
    padding-bottom: 80px;
`;
const WrapperContainer = styled.div `
    width: 80%;
    margin: 0 auto;
`;
const Title = styled.h3 `
    font-size: 32px;
    margin-bottom: 20px;
`;
const ImageGallery = styled.div `
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
    margin-bottom: 30px;
`;
const ImageContainer = styled.div `
    position: relative;
    img {
        width: 100%;
        display: block;
    }
`;
const BottomContent = styled.div `
    padding: 10px;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;

`;
const ContentHeading = styled.h5`
    font-size: 22px;
    font-weight: 600;
    margin-right: 10px;
`;
const ContentDescription = styled.a`
    font-size: 20px;
`;
const DescriptionBox = styled.p`
    font-size: 20px;
`;