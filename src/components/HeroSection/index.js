import React, { useState, useEffect, useRef } from 'react'
import Video from '../../Video/video.mp4'
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { animateScroll as scroll } from 'react-scroll';
import { BiChevronsDown } from 'react-icons/bi';
import "./style.css"
import { TweenMax, Power3 } from 'gsap';

const HeroSection = () => {

    let header = useRef();
    let text = useRef();

    useEffect(() => {
        TweenMax.to(
            header,
            2,
            {
                opacity: 1,
                y: -10,
                ease: Power3.easeOut
            }
        )
        TweenMax.to(
            text,
            2,
            {
                opacity: 1,
                y: -10,
                ease: Power3.easeOut,
                delay: .6
            }
        )
    })

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

   

    const toggleContact = () => {
        scroll.scrollTo(720);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1 ref={el => {header = el}} style={{marginTop: '-50px'}}>Hello!</HeroH1>
                <HeroP ref={el => {text = el}} style={{opacity: '0'}}>
                My name is Kamil and i'm Junior Front End Developer
                </HeroP>
                <Button className="button" style={{marginTop: '-70px'}} onClick={toggleContact}>
                    Scroll down <BiChevronsDown style={{marginLeft: '10px'}} />
                </Button>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
