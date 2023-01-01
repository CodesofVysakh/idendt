import React, { useState } from 'react';
import styled from 'styled-components';
import Gallery1 from '../../../assets/images/heroSectionImages/gallery1.jpeg';
import Gallery2 from '../../../assets/images/heroSectionImages/gallery2.jpeg';
import Gallery3 from '../../../assets/images/heroSectionImages/gallery3.jpeg';
import Gallery4 from '../../../assets/images/heroSectionImages/gallery4.jpeg';
import Gallery5 from '../../../assets/images/heroSectionImages/gallery5.jpeg';
import Gallery6 from '../../../assets/images/heroSectionImages/gallery6.jpeg';
import Group from '../../../assets/images/heroSectionImages/group.jpeg';

function Services() {
    const [ toggle, setToggle ] = useState();
    const serviceData = [
        {
            "id" : 1,
            "image" : Gallery1,
            "title" : "Digital Strategy",
            "subtitle" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            "id" : 2,
            "image" : Gallery2,
            "title" : "Branding",
            "subtitle" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            "id" : 3,
            "image" : Gallery3,
            "title" : "User Experience/User Interface",
            "subtitle" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            "id" : 4,
            "image" : Gallery4,
            "title" : "Development",
            "subtitle" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            "id" : 5,
            "image" : Gallery5,
            "title" : "Web Design",
            "subtitle" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            "id" : 6,
            "image" : Gallery6,
            "title" : "SEO",
            "subtitle" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
    ];
    return (
        <MainContainer>
            <WrapperContainer>
                <Title>OUR SERVICES</Title>
                <ImageGallery>
                    {serviceData.map((item) => (
                        <ImageContainer key={item.id} onMouseEnter={() => setToggle(item.id)} onMouseLeave={() => setToggle()}>
                            <img src={item.image} alt="Image" />
                            <BottomContent className={toggle === item.id ? "hoverContent" : ""}>
                                <ContentHeading>{item.title}</ContentHeading>
                                <ContentDescription>
                                    {item.subtitle}
                                </ContentDescription>
                            </BottomContent>
                        </ImageContainer>
                    ))}
                </ImageGallery>
                <TagLine>"<TagContent>QUALITY OVER QUANTITY <br />AND RESULTS OVER EXCUSES</TagContent>"</TagLine>
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
    cursor: pointer;
`;
const ImageContainer = styled.div `
    position: relative;
    overflow: hidden;
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
    font-family: Georgia;
`;
const TagContent = styled.p`
    font-family: "Inter";
    display: inline;
`;
const BottomContent = styled.div `
    padding: 10px;
    width: 100%;
    position: absolute;
    top: 85%;
    transition: all 0.3s ease-in-out;
    &.hoverContent {
        top: 0;
        transition: all 0.3s ease-in-out;
    }
`;
const ContentHeading = styled.h5`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
`;
const ContentDescription = styled.p`
    font-size: 16px;
`;