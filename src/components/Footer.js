import React from 'react';

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
const Footer = () => {
    return(
        <div>
            <div
                style={{
                    position:"relative",
                    fontSize:"2vw",
                    top:"2vh",
                    left:"5vw",
                    height:"10vh",
                    width:"20vw"
                }}
            >
                        Subsribe to our emails
                        <div>
                            <input style={{position:"relative",width:"20vw",height:"5vh"}} type='text' />
                        </div>

                        <div
                            style={{
                                position:"relative",
                                fontSize:"1vw",
                                bottom:"10vh",
                                left:"70vw",
                                backgroundColor:"#7F68E9",
                                height:"10vh",
                                borderRadius:"8vw"
                            }}
                        >
                            <img style={{
                                position:"relative",
                                top:"3vh",
                                right:"5vw",
                                height:"4vh",
                                width:"2vw"
                            }} src={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsguru.org%2Fwp-content%2Fuploads%2F2018%2F01%2Flogo-app-pictures-photo-network-instagram-social-icon.png&f=1&nofb=1&ipt=47097cc086026cd92e5a6329804b83c7fce47bf287d08e4b44094daae7c39f39&ipo=images"} />
                            <div style={{
                                position:"relative",
                                bottom:"0.5vh",
                                color:"white",
                                fontWeight:"800"
                            }}>
                                Follow shop
                            </div>
                        
        <div
            style={{
                position:"relative",
                fontSize:"1vw",
                width:"100vw",
                bottom:"5vh",
                left:"5vw",
            }}
        >
            {footerList.map((item,i) => (
                <div key={i} 
                style={{
                    position:"relative",
                    float:"left",
                    top:"10vh", 
                    right:"70vw",
                    marginLeft:"1vw"
                }}>
                    {item.name}
                </div>
            ))}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;