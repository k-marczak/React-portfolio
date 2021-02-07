import React from 'react'
import Icon1 from '../../images/projekt1.png'
import Icon2 from '../../images/project1.png'
import Icon3 from '../../images/project-covid.png'
import Icon4 from '../../images/snake.png'
import Icon5 from '../../images/FormValidation.png'
import Icon6 from '../../images/Coral.png'

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
                        <a href="//www.twitter.com" style={{marginRight: 50 + 'px', textDecoration: 'none'}} target="_blank" aria-label="Twitter">
                                    Github
                        </a>
                        <ProjectLink href="//www.twitter.com" style={{marginLeft: 50 + 'px'}} target="_blank" aria-label="Twitter">
                                    Live
                        </ProjectLink>
                    </LinksContainer>

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Support IT</ServicesH2>
                    <ServicesP>This page is inspired by the IT world, written in HTML CSS.</ServicesP>
                   

                    <LinksContainer>
                        <a href="//www.twitter.com" style={{marginRight: 50 + 'px', textDecoration: 'none'}} target="_blank" aria-label="Twitter">
                                    Github
                        </a>
                        <ProjectLink href="//www.twitter.com" style={{marginLeft: 50 + 'px'}} target="_blank" aria-label="Twitter">
                                    Live
                        </ProjectLink>
                    </LinksContainer>

                    

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Zdrowie Covid</ServicesH2>
                    <ServicesP>Simple multi-page website about covid-19. </ServicesP>

                    <LinksContainer>
                        <a href="//www.twitter.com" style={{marginRight: 50 + 'px', textDecoration: 'none'}} target="_blank" aria-label="Twitter">
                                    Github
                        </a>
                        <ProjectLink href="//www.twitter.com" style={{marginLeft: 50 + 'px'}} target="_blank" aria-label="Twitter">
                                    Live
                        </ProjectLink>
                    </LinksContainer>

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>Snake.js</ServicesH2>
                    <ServicesP>Snake is one of my first projects. I made it to learn JavaScript. </ServicesP>

                    <LinksContainer>
                        <a href="//www.twitter.com" style={{marginRight: 50 + 'px', textDecoration: 'none'}} target="_blank" aria-label="Twitter">
                                    Github
                        </a>
                        <ProjectLink href="//www.twitter.com" style={{marginLeft: 50 + 'px'}} target="_blank" aria-label="Twitter">
                                    Live
                        </ProjectLink>
                    </LinksContainer>

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5} />
                    <ServicesH2>Form validation</ServicesH2>
                    <ServicesP>Simple Form using HTML CSS JS. </ServicesP>

                    <LinksContainer>
                        <a href="//www.twitter.com" style={{marginRight: 50 + 'px', textDecoration: 'none'}} target="_blank" aria-label="Twitter">
                                    Github
                        </a>
                        <ProjectLink href="//www.twitter.com" style={{marginLeft: 50 + 'px'}} target="_blank" aria-label="Twitter">
                                    Live
                        </ProjectLink>
                    </LinksContainer>

                </ServicesCard>
                
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
