import {fetchProducts} from '../util/shopify-client'


const loadProducts = () => {
    return {
        type: 'PRODUCTS_LOAD'
    }
}
const loadProductsSuccess = (products) => {
    return {
        type:"ADD_PRODUCTS",
        products,
    }
}

const loadProductsFail  = () => {
    return {
        type:'PRODUCTS_LOAD_FAIL',
        error
    }
}

export const getProducts = () => {
    return dispatch => {
        dispatch(loadProducts())
        fetchProducts()
        .then((products) => {
            dispatch(loadProductsSuccess(products))
        })
        .catch(error => {
            dispatch(loadProductsFail(error))
        })
    }
}