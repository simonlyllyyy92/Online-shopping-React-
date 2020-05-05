import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {auth} from '../../firebase/firebase.utils'
import './header-side-drawer.styles.scss'

const SiderDrawer = ({currentUser, show}) => {

    let drawerClasses = 'side-drawer'
    if(show) {
        drawerClasses = 'side-drawer open'
    }
    return (
    <nav className = {drawerClasses}>
        <ul className = 'side-drawer-ul'>
            <li className = 'side-drawer-list'>
                <Link className = 'side-drawer-li' to='/shop'>
                    SHOP
                </Link>
            </li>
            <li className = 'side-drawer-list'>
                <Link className = 'side-drawer-li' to='/shop'>
                    CONTACT
                </Link>
            </li>

            {currentUser ? (
                <li className = 'side-drawer-list' onClick={() => auth.signOut()}>
                    SIGN OUT
                </li>
            ) : (
                <li className = 'side-drawer-list'>
                    <Link className = 'side-drawer-li' to='/signin'>
                        SIGN IN
                    </Link>
                </li>
            )}
        </ul>
    </nav>
)
}
const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(SiderDrawer)