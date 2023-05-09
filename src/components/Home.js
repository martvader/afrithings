import React from 'react';
import { phrase1 } from '../util/phrases';
import {Collections} from './Landing'
import './style.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Home = () => {
    const homeExpo = [
        {
            name:"Bold African Print Hoodie",
            tag:"$65.00",
            image:"https://cdn.shopify.com/s/files/1/0744/3968/8473/products/hoodie-mockup-featuring-a-disappointed-man-m20987.png?v=1682092732&width=1100"
        },
        {
            name:"Wear Africa",
            image:"https://cdn.shopify.com/s/files/1/0744/3968/8473/files/tee-mockup-of-a-girl-wearing-hoop-earrings-standing-in-front-of-a-brick-wall-24091.png?v=1682099514&width=990"
        },
        {
            name:"AfriCozy",
            image:"https://cdn.shopify.com/s/files/1/0744/3968/8473/collections/Hoodies.jpg?v=1681635498&width=535"
        },
        
        
    ]

    const giftShop = [
        {
            name:"AfriGifts",
            description:phrase1
        },
        {
            name:"",
            image:"https://cdn.shopify.com/s/files/1/0744/3968/8473/products/51204946e633d282191c48bc564a1447.jpg?v=1681561234&width=360",
            tag:"$39.00"
        },
        {
            name:"",
            image:"https://cdn.shopify.com/s/files/1/0744/3968/8473/products/e96029ec9cd2ff571f1eb5b14eb818a6.jpg?v=1681561209&width=360",
            tag:"$39.00"
        },
        {
            name:"",
            image:"https://cdn.shopify.com/s/files/1/0744/3968/8473/products/e769de6e163cde3d73e42ea0aeef75be.jpg?v=1681561180&width=360",
            tag:"$39.00"
        },
        {
            name:"",
            image:"https://cdn.shopify.com/s/files/1/0744/3968/8473/products/9769b3978e8650626495156b600e05cd.jpg?v=1681561158&width=360",
            tag:"$39.00"
        }
    ]

    const footerList = [
        {
            name:"Powered by Shopify"
        },
        {
            name:"Refund policy"
        },
        {
            name:"Terms of service"
        },
        {
            name:"Shipping Policy"
        }
    ]
    
    return(
        <div>
            <div
                style={{
                    position:"relative",
                    fontSize:"3vw",
                    fontWeight:"bold",
                    textAlign:"center",
                    bottom:"30vh",
                    marginBottom:"1vh",
                    
                }}
                >
                        Adorn Africa
                    </div>
            {
                homeExpo.map((item,i) => (
                    <div key={i} className='expoContainer'>
                       <div>
                        <AnimationOnScroll animateIn='animate__fadeInLeftBig' animateOnce={true}>
                            <img className="expoImage" src={item.image} />
                       </AnimationOnScroll>
                            <div className='expoItem' >
                                {item.name}
                            </div>
                        </div>
                    </div>
                ))
            }
            <div>
                {giftShop.map((item,i) => (
                    <div 
                    key={i}
                    style={{
                        position:"relative",
                        textAlign:"center",
                        top:"40vh",
                        backgroundColor:"black"
                        
                    }}>
                        <div style={{
                            position:"relative",
                            textAlign:"center",
                            color:"white",
                            bottom:"80vh",
                            fontWeight:"800",
                            fontSize:"3vw",
                            
                        }}>
                            {item.name}
                        </div>
                        <div
                            style={{
                                position:"relative",
                                color:"white",
                                textAlign:"justify",
                                bottom:"70vh",
                                width:"90vw",
                                left:"5vw",
                                fontSize:"1.2vw",
                            }}
                        >
                            {item.description}
                        </div>
                        <div >
                        <AnimationOnScroll animateIn='animate__fadeInLeftBig' animateOnce={true}>
                        <img className='gftShop' src={item.image} />
                        </AnimationOnScroll>
                        </div>
                    </div>
                ))}
                <div style={{
                    position:"relative",   
                    top:"20vh",
                    left:"45vw",
                    width:"10vw",
                    height:"5vh",
                    color:"black",
                    borderRadius:"2vw",
                    backgroundColor:"white"
                    }}>
                        <div style={{position:"relative", bottom:"34vh", color:"black",height:"1vh"}}>
                            View all
                        </div>
                </div>
            </div>


            <div style={{
                position:"relative",
                top:"50vh"
            }}>
                <div
                     style={{
                         position:"relative",
                         fontSize:"3vw",
                         fontWeight:"bold",
                         right:"40vw",
                         top:"1vh",
                         
                    }}
                >
                        Collections
                </div>
                <Collections />
            </div>
        </div>
    )
     
}

export default Home;