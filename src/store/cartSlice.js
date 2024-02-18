import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    productsInCart: [
        {
            productId: 0,
            productName: 'Fall Limited Edition Sneakers',
            productPrice: 125,
            productAmount: 1,
        }
    ]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.numberOfProductsAdded = action.payload.numberOfProductsAdded;
            state.productsInCart.push(action.payload.product)
        },
        deleteFromCart: (state, action) => {
            state.productsInCart = state.productsInCart.filter(product => product.productId !== action.payload.product.productId);
        }        
    }
})

export const {addToCart, deleteFromCart} = cartSlice.actions

export default cartSlice.reducer