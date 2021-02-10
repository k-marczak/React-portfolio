import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { Button } from '../ButtonElement';
import { animateScroll as scroll } from 'react-scroll';
import { TiLocation } from 'react-icons/ti';
import { FiSmartphone } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import "./style.css"
import { IoMdArrowUp } from 'react-icons/io';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <Button className="btn" onClick={toggleHome}>
                    Back to top <IoMdArrowUp style={{marginLeft: '10px'}} /> 
                </Button>
                
                <SocialMedia>
                    <SocialMediaWrap>
                       
                        <SocialLogo style={{cursor: 'default'}}>
                        
                        <FiSmartphone style={{marginRight: '5px'}}/>   <p className="tel"> +48 882 186 957 </p>

                        </SocialLogo>
                        <SocialLogo style={{cursor: 'default'}}>
                        
                        <MdEmail style={{marginRight: '5px'}}/>  <p className="email"> k_marczak@outlook.com </p> 

                        </SocialLogo>

                        
                        
                        <SocialIcons style={{marginTop: '-10px'}}>
                            <SocialIconLink href="https://github.com/k-marczak" target="_blank" aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/kamil-marczakk/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            
                            <SocialIconLink href="https://www.facebook.com/Cameel54/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            
                            
                            
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
