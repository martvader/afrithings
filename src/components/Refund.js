import React from 'react';
import {RefundPhrase} from '../util/phrases'
import Footer from './Footer';
import {AnimationOnScroll} from 'react-animation-on-scroll'
import 'animate.css';

const Refund = () => {

    const Policy = [
        {
            header:"Refund Policy",
            content:RefundPhrase
        }
    ]
    return(
        <div>
            {Policy.map((item,i) => (
            <div 
                key={i}
                style={{
                position:"relative",
                bottom:"35vh"
            }}>
                <div style={{
                    position:"relative",
                    fontSize:"2vw",
                    fontWeight:"800"
                }}>
                    <AnimationOnScroll animateIn='animate__fadeInLeftBig' animateOnce={true}>
                        {item.header}
                    </AnimationOnScroll>
                </div>
                <div
                    style={{
                        position:"relative",
                        fontSize:"1.5vw",
                        top:"5vh",
                        left:"5vw",
                        width:"92vw",
                        textAlign:"justify"
                    }}
                >   
                        {item.content}
                </div>
                
            </div>
            ))}
        <AnimationOnScroll animateIn='animate__fadeInLeftBig' animateOnce={true}>
                <Footer />
        </AnimationOnScroll>
        </div>
    )
}

export default Refund;