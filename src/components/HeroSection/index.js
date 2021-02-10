import React, { useState, useEffect } from 'react'
import Video from '../../Video/video.mp4'
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { animateScroll as scroll } from 'react-scroll';
import { BiChevronsDown } from 'react-icons/bi';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

   

    const toggleContact = () => {
        scroll.scrollTo(800);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1 style={{marginTop: '-50px'}}>Hello!</HeroH1>
                <HeroP>
                My name is Kamil and i'm Junior Front End Developer
                </HeroP>
                <Button style={{marginTop: '-30px'}} onClick={toggleContact}>
                    Scroll down <BiChevronsDown style={{marginLeft: '10px'}} />
                </Button>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
