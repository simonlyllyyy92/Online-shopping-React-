import React from 'react'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import ResponsiveToggleIcon from '../responsive-toggle-icon/responsive-toggle-icon.component'
import {HeaderContainer,ToggleButton,LogoContainer,OptionsContainer,OptionLink,OptionDiv} from './header.styles'


const Header = ({currentUser, hidden, drawerClickHandler}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>

        <OptionsContainer>
            <OptionLink  to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {currentUser ? (
                <OptionDiv onClick={() => auth.signOut()}>
                SIGN OUT
                </OptionDiv>
            ) : (
                <OptionLink to='/signin'>
                SIGN IN
                </OptionLink>
            )}
            <ToggleButton>
                <ResponsiveToggleIcon click = {drawerClickHandler}/>
            </ToggleButton>
            
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropDown />}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)