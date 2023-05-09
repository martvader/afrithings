import React,{useEffect, useState} from 'react';
import client from '../util/shopify-client'
import './style.css'





const ItemList = () => {
    const [stash, setStash] = useState([]);
    const [source, setSource] = useState([]);
    const [itemId, setItemId]= useState();
    const [currentProduct, setcurrentProduct] = useState([])
    const [showProduct, setShowProduct] = useState(false)


    useEffect(()=> {
    },[])
    
    client.product.fetchAll().then((products) => {
        setStash(products)       
    }) 
     
    
    const HandleProduct = async () => {
        client.product.fetch(itemId).then((product) => {
            setcurrentProduct(product)
        })
    } 

    let myArray = [currentProduct]
    
    const ChangeProduct = (itemId) => {
        setItemId(itemId)
    }
    const toggle = () => {
        setShowProduct(!showProduct)
        console.log(currentProduct)
    }
    const ShowProduct = () => {
        return (
            <div className='desContainer'>
                {myArray.map((item,i) =>  {
                if(item.id === itemId){
                    return(
                    <div key={i}>
                        <div className='desTitle'> 
                            {item.title}
                        </div>
                        <div style={{
                            position:"relative",
                            width:"35vw",
                            lineHeight:"1.9vw",
                            left:"45vw",
                            fontSize:"1.2vw",
                            bottom:"30vh",
                            
                        }}>
                            {item.description}
                        </div>
                        {item.images.map((item,i) => (
                            <div key={i}>
                                <img src={item.src} style={{position:"relative",bottom:"75vh",right:"25vw"}}/>
                            </div>
                        ))}
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
                    <div key={i} className="productContainer">
                        <div key={i}
                            onClick={() => {
                                setItemId(item.id)
                                HandleProduct()
                                toggle()
                            }}
                        >
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