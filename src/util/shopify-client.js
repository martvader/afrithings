import Client from 'shopify-buy';

const client  = Client.buildClient({
    domain:"93417a.myshopify.com",
    storefrontAccessToken:"b05caded15ab12ff3e435335ebb63773"
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
