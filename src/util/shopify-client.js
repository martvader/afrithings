import Client from 'shopify-buy';

const client  = Client.buildClient({
    domain:"4f1dd4-2.myshopify.com",
    storefrontAccessToken:"f55373a86ea2d8a1ff16b891e024c94d"
}) 

export default client;