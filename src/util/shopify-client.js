import Client from 'shopify-buy';

const client  = Client.buildClient({
    domain:"018216.myshopify.com",
    storefrontAccessToken:""c33f13df27be38d23cd9b6ff631840b5
}) 

//FETCH ALL PRODUCTS
export const fetchProducts = () => {
    return new Promise((resolve,reject) => {
        client.product.fetchAll()
        .then((products) => {
            resolve(products.map((product) => {
                return product.attrs;
            }))
        }).catch((error) => {
            console.error(new Error("Something went wrong"))
            reject(error)
        })
    })
}


//CREATE CHECKOUT
export const fetchCart = () => {
    return new Promise((resolve,reject) => {
        client.checkout.create()
        .then(cart => {
            resolve(cart)
        }).catch((error) => {
            console.log(new Error("Fethcing cart error"))
            reject(error)
        })
    })
}

export default client;
