import React from 'react'
import Icon1 from '../../images/projekt1.png'
import Icon2 from '../../images/project1.png'
import Icon3 from '../../images/project-covid.png'
import Icon4 from '../../images/snake.png'
import Icon5 from '../../images/FormValidation.png'
import './style.css'
import { GrGithub } from 'react-icons/gr';
import { GiNetworkBars } from 'react-icons/gi';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, LinksContainer, ProjectLink } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Projects</ServicesH1>
          
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>E-shop Legit</ServicesH2>
                    <ServicesP>This project is a React-app shoe store, using commerce.js material-ui stripe.js </ServicesP>

                    <LinksContainer>
                        
                        <a href="https://github.com/k-marczak/Commerce-Shop" style={{marginRight: 120 + 'px', textDecoration: 'none'}} target="_blank" aria-label="Twitter" className="link">
                                    Github <GrGithub />
                        </a>
                        <a href="https://commerce-shop.netlify.app" style={{marginLeft: 120 + 'px', textDecoration: 'none', marginBottom: '10px'}} target="_blank" className="link" aria-label="Twitter">
                                    Live <GiNetworkBars />
                        </a>
                    </LinksContainer>

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Support IT</ServicesH2>
                    <ServicesP>This page is inspired by the IT world, written in HTML CSS.</ServicesP>
                   

                    <LinksContainer>
                        <a href="https://github.com/k-marczak/Project-support-it" className="link" style={{marginRight: 120 + 'px', textDecoration: 'none'}} target="_blank" aria-label="Twitter">
                                    Github <GrGithub />
                        </a>
                        <a href="https://support-it.netlify.app/" className="link" style={{marginLeft: 120 + 'px', textDecoration: 'none', marginBottom: '10px'}} target="_blank" aria-label="Twitter">
                                    Live <GiNetworkBars />
                        </a>
                    </LinksContainer>

                    

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Zdrowie Covid</ServicesH2>
                    <ServicesP>Simple multi-page website about covid-19. </ServicesP>

                    <LinksContainer>
                        <a href="https://github.com/k-marczak/Zdrowie-covid-react" className="link" style={{marginRight: 120 + 'px', textDecoration: 'none'}} target="_blank" aria-label="Twitter">
                                    Github <GrGithub />
                        </a>
                        <a href="https://zdrowie-covid.netlify.app/" className="link" style={{marginLeft: 120 + 'px', textDecoration: 'none', marginBottom: '10px'}} target="_blank" aria-label="Twitter">
                                    Live <GiNetworkBars />
                        </a>
                    </LinksContainer>

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>Snake.js</ServicesH2>
                    <ServicesP>Snake is one of my first projects. I made it to learn JavaScript. </ServicesP>

                    <LinksContainer>
                        <a href="https://github.com/k-marczak/Snake-Game-JS" className="link" style={{marginRight: 120 + 'px', textDecoration: 'none'}} target="_blank" aria-label="Twitter">
                                    Github <GrGithub />
                        </a>
                        <a href="https://snake-project.netlify.app/" className="link" style={{marginLeft: 120 + 'px', textDecoration: 'none', marginBottom: '10px'}} target="_blank" aria-label="Twitter">
                                    Live <GiNetworkBars />
                        </a>
                    </LinksContainer>

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5} />
                    <ServicesH2>Form validation</ServicesH2>
                    <ServicesP>Simple Form using HTML CSS JS. </ServicesP>

                    <LinksContainer>
                        <a href="https://github.com/k-marczak/Form-validation-js" className="link" style={{marginRight: 120 + 'px', textDecoration: 'none'}} target="_blank" aria-label="Twitter">
                                    Github <GrGithub />
                        </a>
                        <a href="https://validation-formm.netlify.app/" className="link" style={{marginLeft: 120 + 'px', textDecoration: 'none', marginBottom: '10px'}} target="_blank" aria-label="Twitter">
                                    Live <GiNetworkBars />
                        </a>
                    </LinksContainer>

                </ServicesCard>
                
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
