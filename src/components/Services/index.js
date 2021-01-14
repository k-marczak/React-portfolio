import React from 'react'
import Icon1 from '../../images/project1.png'
import Icon2 from '../../images/beer.png'
import Icon3 from '../../images/snake.png'
import Icon4 from '../../images/CovidPage.png'
import Icon5 from '../../images/FormValidation.png'
import Icon6 from '../../images/Coral.png'

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, LinksContainer, ProjectLink } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Projekty</ServicesH1>
          
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue. </ServicesP>

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
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue. </ServicesP>
                    <a href="//www.twitter.com" target="_blank" aria-label="Twitter">
                                Github
                    </a>

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue. </ServicesP>

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
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue. </ServicesP>

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
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue. </ServicesP>

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
                    <ServicesIcon src={Icon6} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue. </ServicesP>

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
