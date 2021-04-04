import React from 'react'
import Icon1 from '../../images/projekt1.png'
import Icon2 from '../../images/project1.png'
import Icon3 from '../../images/project-covid.png'
import Icon4 from '../../images/snake.png'
import Icon5 from '../../images/Screenshot_1.png'
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
                        
                        <a href="https://github.com/k-marczak/Commerce-Shop" style={{ textDecoration: 'none'}} target="_blank" aria-label="Twitter" className="link">
                                    Github <GrGithub />
                        </a>
                        <a href="https://commerce-shop.netlify.app" style={{ textDecoration: 'none', marginBottom: '10px'}} target="_blank" className="link" aria-label="Twitter">
                                    Live <GiNetworkBars />
                        </a>
                    </LinksContainer>

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Photography Portfolio</ServicesH2>
                    <ServicesP>Photography portfolio using html css js. Fully responsive. Implemented animations on website.</ServicesP>
                   

                    <LinksContainer>
                        <a href="https://github.com/k-marczak/html-css-website" className="link" style={{ textDecoration: 'none'}} target="_blank" aria-label="Twitter">
                                    Github <GrGithub />
                        </a>
                        <a href="https://photography-portfolio1.netlify.app/" className="link" style={{ textDecoration: 'none', marginBottom: '10px'}} target="_blank" aria-label="Twitter">
                                    Live <GiNetworkBars />
                        </a>
                    </LinksContainer>

                    

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Furniture Website</ServicesH2>
                    <ServicesP>One-page web with furnitures. Added weather API on the bottom of the page. </ServicesP>

                    <LinksContainer>
                        <a href="https://github.com/k-marczak/furniture-website" className="link" style={{ textDecoration: 'none'}} target="_blank" aria-label="Twitter">
                                    Github <GrGithub />
                        </a>
                        <a href="https://furnitures.netlify.app/" className="link" style={{ textDecoration: 'none', marginBottom: '10px'}} target="_blank" aria-label="Twitter">
                                    Live <GiNetworkBars />
                        </a>
                    </LinksContainer>

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>Snake.js</ServicesH2>
                    <ServicesP>Snake is one of my first projects. I made it to learn JavaScript. </ServicesP>

                    <LinksContainer>
                        <a href="https://github.com/k-marczak/Snake-Game-JS" className="link" style={{ textDecoration: 'none'}} target="_blank" aria-label="Twitter">
                                    Github <GrGithub />
                        </a>
                        <a href="https://snake-project.netlify.app/" className="link" style={{ textDecoration: 'none', marginBottom: '10px'}} target="_blank" aria-label="Twitter">
                                    Live <GiNetworkBars />
                        </a>
                    </LinksContainer>

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5} />
                    <ServicesH2>Youtube Stats</ServicesH2>
                    <ServicesP>Youtube application which showing you Tags and general Info about specific video.</ServicesP>

                    <LinksContainer>
                        <a href="https://github.com/k-marczak/yt-stats" className="link" style={{ textDecoration: 'none'}} target="_blank" aria-label="Twitter">
                                    Github <GrGithub />
                        </a>
                        <a href="https://youtube-stats1.netlify.app/" className="link" style={{ textDecoration: 'none', marginBottom: '10px'}} target="_blank" aria-label="Twitter">
                                    Live <GiNetworkBars />
                        </a>
                    </LinksContainer>

                </ServicesCard>
                
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
