import React,{useEffect, useState} from 'react';
import client,{fetchProducts} from '../util/shopify-client'
import {ButtonGroup,Button} from '@material-ui/core'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './style.css'

const ItemList = () => {
    const [stash, setStash] = useState([]);
    const [source, setSource] = useState([]);
    const [itemId, setItemId]= useState();
    const [currentProduct, setcurrentProduct] = useState([])
    const [showProduct, setShowProduct] = useState(false)
    const [checkoutId, setCheckoutId] = useState()
    const [counter, setCounter] = useState(0);
    const [productId, setProductId] = useState("")
    const [cart, setCart] = useState([])
    const [newItem, setNewItem] = useState("")

    useEffect(()=> {
        /*
        client.collection.fetchAll((collection) => {
            console.log("Your collection is",collection)
        })
        */
        client.product.fetchAll().then((products) => {
            setStash(products) 
            console.log("Your products are",stash)
        })
        setNewItem([...stash,newItem])
    },[stash])

    let ProductVariant =""
    const ItemstoAdd = [
        {
            variantId:ProductVariant,
            quantity:counter
        }
    ]
    
    const HandleProduct = async () => {
        client.product.fetch(itemId).then((product) => {
            setcurrentProduct(product)
            console.log(product)
        })
    } 
    let myArray = [currentProduct]
    
    const ChangeProduct = (itemId) => {
        setItemId(itemId)
    }
    const toggle = () => {
        setShowProduct(!showProduct)  
    }
    
    let CheckoutId;
    
    const Addproduct = () => {
        client.checkout.create().then((checkout) => {
            CheckoutId = checkout.id;
            //console.log(CheckoutId)
            client.checkout.addLineItems(CheckoutId,ItemstoAdd).then((checkout) => {
                console.log("current checkout is",checkout)
                window.open(checkout.webUrl)
            })
        });
        /*
        client.checkout.addLineItems(CheckoutId,ItemstoAdd).then((checkout) => {
            console.log(checkout)
        })
        */
    } 

    const ShowProduct = () => {
        return (
            <div className='desContainer'>
                {myArray.map((item,i) =>  {
                if(item.id === itemId){
                    setProductId(item.id)
                    return(
                    <div key={i}>
                        <div className='desTitle'> 
                            {item.title}
                        </div>
                        <div style={{
                            position:"fixed",
                            width:"35vw",
                            lineHeight:"1.9vw",
                            left:"45vw",
                            fontSize:"1.2vw",
                            bottom:"50vh",
                            
                        }}>
                            {item.description}
                        </div>
                        {item.images.map((item,i) => (
                            <div key={i}>
                                <img src={item.src} style={{position:"fixed",bottom:"30vh",left:"15vw"}}/>
                            </div>
                        ))}
                        <div style={{
                             position:"fixed",
                             bottom:"25vh",
                             left:"55vw",
                             backgroundColor:"black",
                             color:"white",
                             width:"20vw",
                             borderRadius:"2vw"
                            }}>
                        <div style={{
                            position:"relative",
                            fontSize:"1.5vw",
                            textAlign:"left",
                            marginLeft:"3vw"
                        }}>
                            Size 2 x 2 
                        </div>
                    </div>
                        <div 
                            style={{
                                position:"fixed",
                                bottom:"15vh",
                                left:"4vw"
                            }}>
                         <div style={{
                            position:"fixed",
                            right:"82vw",
                            top:"76.5vh"
                            }}>
                            Quantity
                        </div>
                            <div 
                            onClick={() => {
                                Addproduct()
                            }}
                            style={{
                                position:"fixed",
                                bottom:"30vh",
                                left:"25vw",
                                height:"4vh",
                                width:"8vw",
                                color:"white",
                                borderRadius:"1vw"
                                
                            }}>
                                <Button 
                                startIcon = {<ShoppingCartIcon />}
                                style={{
                                    position:"fixed",
                                    bottom:"20vh",
                                    backgroundColor:"#7F68E9",
                                    color:"white"
                                }}>Checkout</Button>
                            </div>
                        <div
                            style={{
                                position:"fixed",
                                bottom:"20vh",
                                left:"20vw"
                            }}
                        >    
                        <ButtonGroup size="small" aria-label="small outlined button group">
                            <Button onClick={()=> 
                                {setCounter(counter+1)}}>+</Button>
                                {<Button disabled>{counter}</Button>}
                                {<Button disabled={counter <= 0} onClick={() => {
                            setCounter(counter - 1)
                        }}>-</Button>}
                        </ButtonGroup>
                        </div>
                    
                </div>
            </div>   
                
                 )                     
                }
            })}                             
            </div>
        )
    }
  
   
    return (
        <div className='storeContainer'>
            {
                
                stash.map((item,i) => (
                    <div key={i} className="productContainer"
                        onClick={() => {
                            setItemId(item.id)
                            HandleProduct()
                            toggle()
                        }}
                    >
                        <div key={i}>
                            {item.images.map((item,i) => (
                                <div key={i}>
                                    <img src={item.src} className='productImage' />
                                </div>
                            ))}
                        </div>
                        <div className="productTitle">
                            {item.title}
                        </div>
                    </div>
                ))
            }
            {showProduct ? <ShowProduct /> : null }
        </div>
    )
}



const Store = () => {
    return(
        <div>
            <ItemList />
        </div>
    )
}

export default Store;