import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 1400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    overflow: hidden !important;
    
    
    @media screen and (max-width: 1000px){
        height: 1300px;
    }

    @media screen and (max-width: 768px){
        height: 2300px;
    }

    @media screen and (max-width: 500px){
        height: 2500px;
    }
`

export const ServicesWrapper = styled.div`
    
   
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    position: relative;
    bottom: 80px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
       
        position: relative;
        top: 60px;
        
    }

    @media screen and (max-width: 508px){
        top: -70px;
        
        
    }

    @media screen and (max-width: 480px){
        
        
        bottom: 120px;
    }

`;

export const ServicesCard = styled.div`
    overflow-x: hidden;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    margin-top: 30px;
  

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        
    }
`

export const ServicesIcon = styled.img`
    height: 200px;
    width: 350px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    position: relative;
    bottom: 80px;
    
    @media screen and (max-width: 768px) {
        position: relative;
        top: 60px;
        
    }


    @media screen and (max-width: 508px){
        
        position: relative;
        top: -35px;
    }

    @media screen and (max-width: 480px){
        font-size: 3rem;
        
        top: -90px;
    }


`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`
export const ServicesH3 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: white;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    height: 50px;
`

export const LinksContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 260px;
    

    @media screen and (max-width: 970px){
        grid-gap: 210px;
    }

    @media screen and (max-width: 870px){
        grid-gap: 170px;
    }

    @media screen and (max-width: 800px){
        grid-gap: 150px;
    }

    @media screen and (max-width: 768px){
        grid-gap: 360px;
    }

    @media screen and (max-width: 610px){
        grid-gap: 280px;
    }

    @media screen and (max-width: 510px){
        grid-gap: 240px;
    }

    @media screen and (max-width: 450px){
        grid-gap: 160px;
    }

`
export const ProjectLink = styled.div`
    text-decoration: none;
    
`






