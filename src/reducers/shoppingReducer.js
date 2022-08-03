import { types } from "../types";

const initialState = {
    products: [],
    product: null
}

export const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.SET_PRODUCTS:
            
            if(!action.payload.length){
                return state;
            }

            return {
                ...state,
                products: [...action.payload]
            }

        case types.ADD_PRODUCT: 

            if(!action.payload){
                return state
            }

            return {
                ...state,
                products: [...state.products, action.payload]
            }

        case types.ACTIVE_PRODUCT: 

            return {
                ...state,
                product: action.payload
            }
    
        default:
            return state

    }
}