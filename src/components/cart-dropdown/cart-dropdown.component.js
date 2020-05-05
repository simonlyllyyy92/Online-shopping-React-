import React from 'react'
import {connect} from 'react-redux'
import {selectCartItem} from '../../redux/cart/cart.selectors'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.action'

import './cart-dropdown.styles.scss'

const CartDropDown = ({cartItem, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItem.length ?
                cartItem.map(item => <CartItem key = {item.id} item = {item} />)
                :
                <span className = 'empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick = {() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector ({
    cartItem: selectCartItem
})



export default withRouter(connect(mapStateToProps)(CartDropDown))