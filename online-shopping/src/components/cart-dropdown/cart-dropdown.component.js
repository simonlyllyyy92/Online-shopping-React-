import React from 'react'
import {connect} from 'react-redux'
import {selectCartItem} from '../../redux/cart/cart.selectors'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

const CartDropDown = ({cartItem}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItem.map(item => <CartItem key = {item.id} item = {item} />)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItem: selectCartItem(state)
})
export default connect(mapStateToProps)(CartDropDown)