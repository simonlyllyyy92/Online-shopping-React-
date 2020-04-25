import React from 'react'

import {ReactComponent as ShoppingIcon} from '../../assets/original.svg'

import './cart-icon.styles.scss'

import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import { selectCartItemCount} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'

const CartIcon = ({toggleCartHidden, totalQuantity}) => (
    <div className = 'cart-icon' onClick = {toggleCartHidden}>
        <ShoppingIcon className = 'shopping-icon'/>
        <span className ='item-count'>{totalQuantity}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector ({
    totalQuantity: selectCartItemCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)