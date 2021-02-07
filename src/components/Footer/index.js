import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { Button } from '../ButtonElement';
import { animateScroll as scroll } from 'react-scroll';
import { TiLocation } from 'react-icons/ti';
import { FiSmartphone } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import "./style.css"

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <Button className="btn" onClick={toggleHome}>
                    Back to top
                </Button>
                {/* <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms od Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/signin">Contact</FooterLink>
                                <FooterLink to="/signin">Support</FooterLink>
                                <FooterLink to="/signin">Destinations</FooterLink>
                                <FooterLink to="/signin">Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                                <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to="/signin">Submit Video</FooterLink>
                                <FooterLink to="/signin">Ambassadors</FooterLink>
                                <FooterLink to="/signin">Agency</FooterLink>
                                <FooterLink to="/signin">Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                                <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/signin">Instagram</FooterLink>
                                <FooterLink to="/signin">Facebook</FooterLink>
                                <FooterLink to="/signin">Youtube</FooterLink>
                                <FooterLink to="/signin">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer> */}
                <SocialMedia>
                    <SocialMediaWrap>
                        {/* <SocialLogo to='/'>
                        
                        <TiLocation style={{marginRight: '5px'}}/>    Warsaw, Poland 

                        </SocialLogo> */}
                        <SocialLogo to='/'>
                        
                        <FiSmartphone style={{marginRight: '5px'}}/>    +48 882 186 957 

                        </SocialLogo>
                        <SocialLogo to='/'>
                        
                        <MdEmail style={{marginRight: '5px'}}/>    k_marczak@outlook.com 

                        </SocialLogo>

                        
                        
                        <SocialIcons style={{marginTop: '-10px'}}>
                            <SocialIconLink href="https://github.com/k-marczak" target="_blank" aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/kamil-marczakk/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/koozlarz/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
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
