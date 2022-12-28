import React from 'react';
import styled from 'styled-components';
import Blog from '../../../assets/images/blog/blog.png';

function BlogFaq() {
    return (
        <MainContainer>
            <WrapperContainer>
                <BlogContainer>
                    <Title>OUR LATEST BLOGS</Title>
                    <ImageGallery>
                        <ImageContainer>
                            <img src={Blog} alt="Image" />
                        </ImageContainer>
                        <ImageContainer>
                            <img src={Blog} alt="Image" />
                        </ImageContainer>
                        <ImageContainer>
                            <img src={Blog} alt="Image" />
                        </ImageContainer>
                    </ImageGallery>
                </BlogContainer>
                <FaqContainer>
                    <Title>FAQ</Title>
                    <SubTitle>CLARIFYING YOUR CONCERNS AND DOUBTS.</SubTitle>
                    <FaqListContainer>
                        <Faq>
                            <ContentHeading>DO I REALLY NEED A WEBSITE?</ContentHeading>
                            <ContentDescription></ContentDescription>
                        </Faq>
                        <Faq>
                            <ContentHeading>WHAT IS SEARCH ENGINE OPTIMIZATION?</ContentHeading>
                            <ContentDescription></ContentDescription>
                        </Faq>
                        <Faq>
                            <ContentHeading>WHAT MAKES FOR A GOOD WEB DESIGN?</ContentHeading>
                            <ContentDescription></ContentDescription>
                        </Faq>
                    </FaqListContainer>
                </FaqContainer>
            </WrapperContainer>
        </MainContainer>
    )
}

export default BlogFaq;

const MainContainer = styled.div `
    background-color: #202121;
    padding: 30px 0;
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
const SubTitle = styled.h5 `
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
const FaqListContainer = styled.div`

`;
const BlogContainer = styled.div `
    
`;
const FaqContainer = styled.div `
    
`;
const Faq = styled.div `
    padding: 0 20px;
    margin-bottom: 20px;
    border-right: 2.5px solid #fff;
    border-bottom: 2.5px solid #fff;
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