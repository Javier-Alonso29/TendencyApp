import { types } from "../types"

export const addProduct = (product) => ({
    type: types.ADD_PRODUCT,
    payload: product
})

export const getListProduct = () =>{
    return async (dispatch) => {
        try {
            const url = `https://eshop-deve.herokuapp.com/api/v2/orders`
            const response = await fetch(url, {
                headers: new Headers({
                    'Authorization' : 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ'
                })
            })

            const {orders} = await response.json()

            dispatch(setProducts(orders))

        } catch (error) {
            console.log(error);   
        }
    }
}

export const setProducts = (orders) => ({
    type: types.SET_PRODUCTS,
    payload: orders
}) 

export const activeProduct = (product) => ({
    type: types.ACTIVE_PRODUCT,
    payload: product
})