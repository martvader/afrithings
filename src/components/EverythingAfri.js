import React from 'react';
import Footer from './Footer';
import {Celebrating,StorySoFar} from '../util/phrases'
import './style.css'
import {AnimationOnScroll} from 'react-animation-on-scroll'

const EverythingAfri = () => {
    const Celebrating = `
        Celebrating African Art and Design: The Story Behind Afrithings
    `
    const catalog = [
        {
            header:Celebrating,
            content:StorySoFar,
            date:"April 15, 2023"
        },
        {
            tile:"https://cdn.shopify.com/s/files/1/0744/3968/8473/files/Black_logo_480x480.png?v=1681576556"
        },
        {
            tile:"https://cdn.shopify.com/s/files/1/0744/3968/8473/files/NB_5_Hoodie_6_480x480.png?v=1681595215"
        },
        {
            tile:"https://cdn.shopify.com/s/files/1/0744/3968/8473/files/NB_5_Hoodie_7_160x160.png?v=1681595717"
        }
    ]
    return(
        <div>
            <div>
                {catalog.map((item,i)=> (
                    <div
                    key={i}
                >
                    <div style={{
                        position:"relative",
                        fontSize:"2vw",
                        fontWeight:"bold",
                        bottom:"35vh"
                    }}>
                            {item.header}
                    </div>
                    <div className="evContent" >
                    <AnimationOnScroll animateIn='animate__fadeInLeftBig' animateOnce={true}>
                            {item.content}
                    </AnimationOnScroll>
                    </div>
                    <div>
                        <AnimationOnScroll animateIn='animate__fadeInRightBig' animateOnce={true}>
                             <img className="evImage"  src={item.tile} />
                         </AnimationOnScroll>
                    </div>
                </div>
                ))}
            </div>     
            <Footer />
        </div>
    )
}

export default EverythingAfri;