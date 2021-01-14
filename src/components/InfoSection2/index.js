import React from 'react'
import obrazek1 from '../../images/html5.png'
import obrazek2 from '../../images/css3.png'
import obrazek3 from '../../images/js.png'
import obrazek4 from '../../images/220px-React-icon.svg.png'
import obrazek5 from '../../images/jquery.png'
import obrazek6 from '../../images/sass.png'
import obrazek7 from '../../images/bootstrap.png'
import obrazek8 from '../../images/github.png'
import obrazek9 from '../../images/php.svg'
import obrazek10 from '../../images/MySQL.svg'
import obrazek11 from '../../images/npm.png'
import obrazek12 from '../../images/Firebase.png'
import {Img, Features, FeaturesContent, Box, Box1, SkillsWrapper, Skills } from './InfoElements'



const InfoSection2 = ({lightBg, id, imgStart, topLine, lightText, heading, darkText, description, buttonLabel, alt, primary, dark, dark2}) => {
    return (
        <>
            <Features lightBg={lightBg} id={id}>
                <SkillsWrapper>
             
                    <h1 class="skills_heading">Umiejętności i narzędzia</h1>

                    <FeaturesContent>
                        <Box>
                            <Img src={obrazek1} alt={alt}/>
                            <Skills>HTML5</Skills>
                        </Box>
                        <Box>
                            <Img src={obrazek2} alt={alt}/>
                            <Skills>CSS3</Skills>
                        </Box>
                        <Box>
                            <Img src={obrazek3} class="js" alt={alt}/>
                            <Skills>JS ES6</Skills>
                        </Box>
                        <Box>
                            <Img src={obrazek4} alt={alt}/>
                            <Skills>React</Skills>
                            
                        </Box>
                        <Box>
                            <Img src={obrazek5} alt={alt}/>
                            <Skills>JQuery</Skills>
                            
                        </Box>
                        <Box>
                            <Img src={obrazek6} alt={alt}/>
                            <Skills>Sass</Skills>
                            
                        </Box>
                        <Box>
                            <Img src={obrazek7} alt={alt}/>
                            <Skills>Bootstrap</Skills>
                            
                        </Box>

                        <Box>
                            <Img src={obrazek8}  alt={alt}/>
                            <Skills>Github</Skills>
                            
                        </Box>
                        {/* <Box>
                            <Img src={obrazek9}  alt={alt}/>
                            <Skills>php</Skills>
                            
                        </Box> */}
                        <Box1 class="disapear">
                            <Img src={obrazek10}  alt={alt}/>
                            <Skills>MySql</Skills>
                            
                        </Box1>
                        
                    </FeaturesContent>

                </SkillsWrapper>
            </Features>
        </>
    )
}

export default InfoSection2
