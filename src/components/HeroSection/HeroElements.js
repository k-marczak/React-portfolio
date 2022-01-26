import styled from 'styled-components';
import { MdKeyboardArrowDown, MdArrowDownward } from 'react-icons/md';
import image from '../../images/pexels.jpg'


export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    /* Add :before styles  */
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

    
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;



export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 68px;
    text-align: center;
    position: relative;
    bottom: 90px;
    color: #e2f3f5;
    font-family: 'Ubuntu', sans-serif;


    @media screen and (max-width: 768px){
        font-size: 40px;
    };



    @media screen and (max-width: 480px){
        font-size: 45px;
        bottom: 96px;
    };

`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    position: relative;
    bottom: 90px;


    @media screen and (max-width: 768px){
        font-size: 24px;
    }



    @media screen and (max-width: 480px){
        font-size: 18px;
    }

`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    bottom: 90px;
`;


export const ArrowForward = styled(MdArrowDownward)`
    margin-left: 8px;
    font-size: 20px;
    
`;

export const ArrowRight = styled(MdKeyboardArrowDown)`
    margin-left: 8px;
    font-size: 20px;
`;





