import React, {useEffect} from 'react'
import obrazek1 from '../../images/html5.png'
import obrazek2 from '../../images/css3.png'
import obrazek3 from '../../images/js.png'
import obrazek4 from '../../images/220px-React-icon.svg.png'
import obrazek5 from '../../images/node.png'
import obrazek6 from '../../images/java-icon.svg'
import obrazek7 from '../../images/express.svg'
import obrazek8 from '../../images/github.png'
import obrazek9 from '../../images/php.svg'
import obrazek10 from '../../images/mongo.svg'
import obrazek11 from '../../images/styled.png'
import obrazek12 from '../../images/Firebase.png'
import {Img, Features, FeaturesContent, Box, Box1, SkillsWrapper, Skills } from './InfoElements'

import Aos from 'aos';
import "aos/dist/aos.css"



const InfoSection2 = ({lightBg, id, imgStart, topLine, lightText, heading, darkText, description, buttonLabel, alt, primary, dark, dark2}) => {
    
    useEffect(() => {
        Aos.init({ duration: 2800, animatedClassName: 'aos-animate', once: true });
    }, []);
    
    return (
        <>
            <Features lightBg={lightBg} id={id}>
                <SkillsWrapper>
             
                    <h1 class="skills_heading">Skills & Tools</h1>

                    <FeaturesContent>
                        <Box data-aos="fade" data-aos-delay="30">
                            <Img  src={obrazek1} alt={alt}/>
                            <Skills>HTML5</Skills>
                        </Box>
                        <Box data-aos="fade" data-aos-delay="50">
                            <Img src={obrazek2} alt={alt}/>
                            <Skills>CSS3</Skills>
                        </Box>
                        <Box data-aos="fade" data-aos-delay="9000">
                            <Img src={obrazek3} class="js" alt={alt}/>
                            <Skills>JS ES6</Skills>
                        </Box>
                        <Box data-aos="fade" data-aos-delay="9000">
                            <Img src={obrazek4} alt={alt}/>
                            <Skills>React</Skills>
                            
                        </Box>
                        <Box data-aos="fade" data-aos-delay="9000">
                            <Img src={obrazek5} style={{height: '42px', marginTop: '6px'}} alt={alt}/>
                            <Skills>Node.js</Skills>
                            
                        </Box>
                        <Box data-aos="fade" data-aos-delay="9000">
                            <Img src={obrazek6} alt={alt}/>
                            <Skills>Java</Skills>
                            
                        </Box>
                        <Box data-aos="fade" data-aos-delay="9000">
                            <Img src={obrazek7} alt={alt}/>
                            <Skills>Express.js</Skills>
                            
                        </Box>

                        <Box data-aos="fade" data-aos-delay="9000">
                            <Img src={obrazek8}  alt={alt}/>
                            <Skills>Github</Skills>
                            
                        </Box>
                        {/* <Box>
                            <Img src={obrazek9}  alt={alt}/>
                            <Skills>php</Skills>
                            
                        </Box> */}
                        <Box1 class="disapear" data-aos="fade" data-aos-delay="9000">
                            <Img src={obrazek11} style={{height: '32px', position: 'relative', top: '10px'}}  alt={alt}/>
                            <Skills style={{marginTop: '17px', position: 'relative', bottom: '13px' }}>Styled-components</Skills>
                            
                        </Box1>
                        <Box1 class="disapear" data-aos="fade" data-aos-delay="9000">
                            <Img src={obrazek10} style={{height: '30px', position: 'relative', right: '5px', top: '7px'}}  alt={alt}/>
                            <Skills style={{marginTop: '17px'}}>MongoDB</Skills>
                            
                        </Box1>
                        
                    </FeaturesContent>

                </SkillsWrapper>
            </Features>
        </>
    )
}

export default InfoSection2
