import styled from 'styled-components';



export const Features = styled.div`
    background: #000;
    color: white;
    text-align: center;
    
    
    
`

export const FeaturesContent = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
    align-self: center;
    justify-content:center;
    justify-self: center;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(4, 1fr);
        
    }

    @media screen and (max-width: 768px) {
        position: relative;
        top: 60px;
        
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(3, 1fr);
        
    }

    @media screen and (max-width: 450px) {
        grid-template-columns: repeat(2, 1fr);
        position: relative;
        left: 15px;
        
    }

    @media screen and (max-width: 450px) {
        position: relative;
        top: 100px;
        
    }

    @media screen and (max-width: 400px) {
        
        position: relative;
        left: 5px;
        
    }


`


export const SkillsWrapper = styled.div`
    max-width: 1200px;
    text-align: center;
    margin: 0 auto;
    align-self: center;
    justify-content:center;
    justify-self: center;
    height: 450px;

    h1{
        position: relative;
        top: 40px;
    }

    @media screen and (max-width: 1000px) {
        height: 600px;
        
    }

    @media screen and (max-width: 768px) {
        position: relative;
        top: 60px;

        h1{
            position: relative;
            top: 90px;
        }
        
    }


    @media screen and (max-width: 700px) {
        height: 850px;
        
    }

    @media screen and (max-width: 450px) {
        h1{
            position: relative;
            top: 120px;
        }
    }
    
    @media screen and (max-width: 400px) {
        h1{
            font-size: 1.7rem;
        }
    }

    
`

export const Box = styled.div`
    color: black;
    text-align: center;
    justify-content: center;
    padding: 20px;
    background: whitesmoke;
    border-radius: 30px;
    transition: all 0.2s ease-in-out;
    margin: 10px 3px;
    margin-top: 30px;
    height: 120px;  
    width: 130px;

    &:hover{
        transform: scale(1.16) !important;
        transition: all 0.2s ease-in-out !important;
        
    }


    .disapear{
        display: none;
    }
   



`
export const Box1 = styled.div`
    color: black;
    text-align: center;
    justify-content: center;
    padding: 20px;
    background: whitesmoke;
    border-radius: 30px;
    transition: all 0.2s ease-in-out;
    margin: 10px 3px;
    margin-top: 30px;
    height: 120px;  
    width: 130px;
    
    &:hover{
        transform: scale(1.16) !important;
        transition: all 0.2s ease-in-out !important;
        
    }

    @media screen and (max-width: 480px){
        display: none;
    }
    


`

export const Skills = styled.div`
    position: relative;
    right: 0px;
`

export const Img = styled.img`
    /* width: 100%; */
    margin: 0 0 10px 0;
    padding-right: 0;
    max-height: 50px;

    .js{
        height: 200000px;
    }

    .github{
        
    }
    
`





export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : "#010606")}
    ;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax( auto, 1fr );
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 
    col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;


export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px){
        font-size: 32px;
        
    }

    @media screen and (max-width: 450px) {
        position: relative;
        top: 100px;
        
    }
    
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 550px;
    height: 100%;

`

