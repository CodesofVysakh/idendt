import React from 'react';
import styled from 'styled-components';
import Gallery1 from '../../../assets/images/heroSectionImages/gallery1.jpeg';
import Gallery2 from '../../../assets/images/heroSectionImages/gallery2.jpeg';
import Gallery3 from '../../../assets/images/heroSectionImages/gallery3.jpeg';
import Gallery4 from '../../../assets/images/heroSectionImages/gallery4.jpeg';
import Gallery5 from '../../../assets/images/heroSectionImages/gallery5.jpeg';
import Gallery6 from '../../../assets/images/heroSectionImages/gallery6.jpeg';
import Group from '../../../assets/images/heroSectionImages/group.jpeg';

function Services() {
    return (
        <MainContainer>
            <WrapperContainer>
                <Title>OUR SERVICES</Title>
                <ImageGallery>
                    <ImageContainer>
                        <img src={Gallery1} alt="Image" />
                        <BottomContent>
                            <ContentHeading>Digital Strategy</ContentHeading>
                            <ContentDescription></ContentDescription>
                        </BottomContent>
                    </ImageContainer>
                    <ImageContainer>
                        <img src={Gallery2} alt="Image" />
                        <BottomContent>
                            <ContentHeading>Branding</ContentHeading>
                            <ContentDescription></ContentDescription>
                        </BottomContent>
                    </ImageContainer>
                    <ImageContainer>
                        <img src={Gallery3} alt="Image" />
                        <BottomContent>
                            <ContentHeading>User Experience/User Interface</ContentHeading>
                            <ContentDescription></ContentDescription>
                        </BottomContent>
                    </ImageContainer>
                    <ImageContainer>
                        <img src={Gallery4} alt="Image" />
                        <BottomContent>
                            <ContentHeading>Development</ContentHeading>
                            <ContentDescription></ContentDescription>
                        </BottomContent>
                    </ImageContainer>
                    <ImageContainer>
                        <img src={Gallery5} alt="Image" />
                        <BottomContent>
                            <ContentHeading>Web Design</ContentHeading>
                            <ContentDescription></ContentDescription>
                        </BottomContent>
                    </ImageContainer>
                    <ImageContainer>
                        <img src={Gallery6} alt="Image" />
                        <BottomContent>
                            <ContentHeading>SEO</ContentHeading>
                            <ContentDescription></ContentDescription>
                        </BottomContent>
                    </ImageContainer>
                </ImageGallery>
                <TagLine>"QUALITY OVER QUANTITY <br />AND RESULTS OVER EXCUSES"</TagLine>
                <ImageContainer>
                    <img src={Group} alt="Image" />
                </ImageContainer>
            </WrapperContainer>
        </MainContainer>
    )
}

export default Services;

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
const TagLine = styled.small`
    font-size: 28px;
    font-style: italic;
    display: block;
    text-align: center;
    margin-bottom: 25px;
`;
const BottomContent = styled.div `
    padding: 10px;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
`;
const ContentHeading = styled.h5`
    font-size: 22px;
    font-weight: 600;
`;
const ContentDescription = styled.p`
    font-size: 20px;
`;
const DescriptionBox = styled.p`
    font-size: 20px;
`;