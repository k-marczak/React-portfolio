import React, { useState } from 'react'
import { Button } from '../ButtonElement'
import obrazek1 from '../../images/svg-3.svg'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements'
import styled, {createGlobalStyle, css} from 'styled-components';
import './style.css'
import {db} from '../../firebase'


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

        top: 70px;
        
    }

    @media screen and (max-width: 480px){
        height: 310px;
        position: relative;
        top: 90px;
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




const InfoSection = ({lightBg, id }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
        })
        .then(() => {
            alert('Message has been submitted. Thank you :)')
        })
        .catch((error) => {
            alert(error.message);
        });

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <>
        <GlobalStyle />
            <InfoContainer lightBg={lightBg} id={id}>
                <StyledFormWrapper>
                    <form className="form" onSubmit={handleSubmit}>
                        <h2 style={{marginTop: '-10px', textAlign: 'center', fontSize: '30px'}}>Contact Form</h2>

                        <label className="element3">Name</label>
                        <input 
                            className="your-name"
                            placeholder="Your name..." 
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                        />

                        <label className="element2" placeholder="Email">Email</label>
                        <input 
                            placeholder="Email..." 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        

                        <label className="element" placeholder="Message">Message</label>
                        <textarea 
                            placeholder="Message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}></textarea>

                        <button type='submit' className="something-diff" >Submit</button>
                       
                        
                    </form>    
              
                </StyledFormWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
