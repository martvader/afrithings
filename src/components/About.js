import React from 'react';
import { Aboutphrase } from '../util/phrases';
import Footer from './Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';
const aboutHeader = [
    {
        header:"ABOUT AFRITHINGS",
        content:Aboutphrase
    }
]
const About = () => {
    return(
    <div>
        {
            aboutHeader.map((item,i) => (
                <div>
                <div
                    style={{
                        position:"relative",
                        fontSize:"2vw",
                        bottom:"25vh",
                        left:"40vw",
                        width:"20vw",
                        fontSize:"2vw",
                        fontWeight:"800",
                        textAlign:"justify"
                    }}
                >
                <AnimationOnScroll animateIn='animate__fadeInLeftBig' animateOnce={true}>
                        {item.header}
                </AnimationOnScroll>
                </div>
                    <div style={{
                        position:"relative",
                        color:"black",
                        marginTop:"2vw",
                        textAlign:"justify",
                        bottom:"20vh",
                        width:"80vw",
                        left:"10vw",
                        fontSize:"1.2vw"
                    }}>
                        {item.content}
                    </div>
                </div>
            ))
        }
        <AnimationOnScroll animateIn='animate__fadeInLeftBig' animateOnce={true}>
            <Footer />
        </AnimationOnScroll>
    </div>
    )
}

export default About;