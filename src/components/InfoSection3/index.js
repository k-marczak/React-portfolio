import React, { useState } from 'react'
import { Button } from '../ButtonElement'
import obrazek1 from '../../images/svg-3.svg'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements'
import styled, {createGlobalStyle, css} from 'styled-components';


const GlobalStyle = createGlobalStyle`
    body{
        height: 60vh;
    }

    .element{
        display: block;
    }

    .element2{
        display: block;
        margin-top: 30px;
    }
    
    .element3{
        position: relative;
        top: 5px;
    }
`

const sharedStyles = css`
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
    padding: 0 20px;
    position: relative;
    top: 90px;

    @media screen and (max-width: 768px) {

        top: 120px;
        
    }

    @media screen and (max-width: 480px){
        height: 310px;
        position: relative;
        top: 200px;
    }
    
`;

const StyledForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
    

    @media screen and (max-width: 768px){
        position: relative;
        bottom: 100px;
    }

    @media screen and (max-width: 450px){
        height: 490px;
    }

`;

const StyledInput = styled.input`
    display: block;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
    background-color: #eee;
`

const StyledTextArea = styled.textarea`
    background-color: #eee;
    width: 100%;
    min-height: 100px;
    resize: none;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`

const StyledButton = styled.button`
    display: block;
    background-color: black;
    color: #fff;
    font-size: .9rem;
    border: 0;
    margin-top: 20px;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
`

const StyledFieldset = styled.fieldset`
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin: 20px 0;

    label{
        padding: 0 10px;
    }

    input{
        margin-right: 10px;
    }


`

const StyledError = styled.div`
    color: red;
    font-weight: 800;
    margin: 0 0 40px 0;
`



const initalState = {
    name: '',
    email: '',
    message: '',

}

const InfoSection = ({lightBg, id }) => {

    const [state, setState] = useState(initalState);
    const [error, setError] = useState('');
    
    const handleSubmit = e => {
        

        

        
        for(let key in state) {
            if(state[key] === ''){
                setError(`You must provide the ${key}`)
                return
            }
        }

        setError('');
        const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const test = regex.test(state.email);
        alert("Email has been sent, thank you.")

        e.preventDefault();

    }

    const handleInput = e => {
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;

        setState(prev => ({...prev, [inputName]: value}))
        



    }
 

    return (
        <>
        <GlobalStyle />
            <InfoContainer lightBg={lightBg} id={id}>
                <StyledFormWrapper>
                    <StyledForm onSubmit={handleSubmit}>
                        <h2 style={{marginBottom: '10px'}}>Contact Form</h2>
                        <label class="element3"htmlFor='name'>Name</label>
                        <StyledInput type='text' name="name" value={state.name} onChange={handleInput} />
                        <label class="element2" htmlFor="email">Email</label>
                        <StyledInput type="email" name="email" value={state.email} onChange={handleInput}  />
                
                        <label class="element" htmlFor="message">Message</label>
                        <StyledTextArea name="message" value={state.message} onChange={handleInput} />
                        {error && ( <StyledError><p>{error}</p></StyledError> )}
                       
                        <StyledButton style={{marginTop: '7px'}} type="submit">Send Message</StyledButton>
                    </StyledForm>    
              
                </StyledFormWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
