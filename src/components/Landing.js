import React,{useState} from 'react';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Refund from './Refund';
import EverythingAfri from './EverythingAfri';
import Store from './Store';

export const Collections = () => {
    const collectionList = [
        {
            name:"Africozy",
            image:"https://cdn.shopify.com/s/files/1/0744/3968/8473/collections/Hoodies.jpg?v=1681635498&width=535"
        },
        {
            name:"AfriGifts",
            image:"https://cdn.shopify.com/s/files/1/0744/3968/8473/collections/Untitled_design_34.png?v=1681591493&width=535"
        },
        {
            name:"Afritees",
            image:"https://cdn.shopify.com/s/files/1/0744/3968/8473/collections/TEes.jpg?v=1682099247&width=535"
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
            
            {
                collectionList.map((item,i) => (
                    <div
                        key={i}
                        style={{
                            position:"relative",
                            float:"left",
                            width:"30vw",
                            marginLeft:"1vw",
                            left:"5vw",
                            height:"50vh",
                            bottom:"20vh",
                            borderRadius:"0.8vw",
                            backgroundImage:`url(${item.image})`,
                            backgroundRepeat:"no-repeat",
                            backgroundPosition:"center"
                        }}
                        
                    >
                        <div style={{
                            position:"relative",
                            top:"50vh"
                        }}>
                            {item.name}
                        </div>
                    </div>
                    
                ))
            }
            <div>
                <Footer />
            </div>
        </div>
    )
     
}
const Landing = () => {
    const [active, setActive] = useState("white")
    const [currentTab, setCurrentTab] = useState('Home')
    const tabList = [ 
        {
            name: 'Home',
            label:'Home',
            content:(
                <div style={{
                    position:"relative",
                    top:"40vh"
                }}>
                    
                    <Home />
                    
                </div>
            )
        },
        { 
            name: 'Collections',
            label:'Collections',
            content:(
                <div
                    style={{
                    position:"relative",
                    top:"40vh"
                    }}
                >
                <div
                     style={{
                         position:"relative",
                         fontSize:"3vw",
                         fontWeight:"bold",
                         right:"37vw",
                         bottom:"20vh"
                    }}
                >
                        Collections
                </div>
                    <Collections />
                </div>
            )
        },
        { 
            name: 'Everything and Afrithings',
            label:'Everything and Afrithings',
            content:(
                <div
                    style={{
                        position:"relative",
                        top:"40vh"
                    }}
                >
                    <EverythingAfri />
                </div>
            )
        },
        { 
            name: 'Refunds & returns',
            label:'Refunds & returns',
            content:(
                <div
                    style={{
                        position:"relative",
                        top:"40vh"
                    }}
                >
                    <Refund />
                </div>
            )
        },
        {
            name:"Store",
            label:"Store",
            content:(
                <div>
                    <Store />
                </div>
            )
        },
        { 
            name: 'About us',
            label:'About us',
            content:(
                <div style={{
                    position:"relative",
                    top:"40vh"
                }}>
                    <About />
                </div>
            )
        }
    ]
    let imageLink = "https://cdn.shopify.com/s/files/1/0744/3968/8473/files/White_Logo.png?v=1681576513&width=120"
    return(
<div>
    <div
        style={{
            position:"relative",
            top:"4vh",
            backgroundColor:"black",
            backgroundImage:`url(${imageLink})`,
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center bottom",
            width:"100%",
            height:"20vh"
        }}
        >
    {
        tabList.map((tab, i) => (
                <button 
                variant="outlined"
                key={i}
                onClick={() => setCurrentTab(tab.name)}
                style={{
                    position:"relative",
                    border:"none",
                    height:"3vh",
                    top:"4vh",
                    borderRadius:"2px",
                    display:"flex",
                    color:active === i ? "white" :"black",
                    background:"black",
                    color:"white",
                    marginLeft:"10vw",
                    float:"left"
                }}>
                    {tab.label}
                </button>
               
            ))
        }
    </div>
    {
        tabList.map((tab, i) => {
            if(tab.name === currentTab){
                return <div key={i}> {tab.content} </div>
            }else return
        })
    }
</div>
    )
}
export default Landing;