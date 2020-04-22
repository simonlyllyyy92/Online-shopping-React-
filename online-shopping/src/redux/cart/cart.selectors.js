import {createSelector} from 'reselect'

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
    [selectCart],
    (cart) => cart.cartItems 
)

export const selectCartItemCount = createSelector(
    [selectCartItem],
    cartItem => cartItem.reduce((accumulatedQuantity, cartItem)=> accumulatedQuantity + cartItem.quantity, 0)
)