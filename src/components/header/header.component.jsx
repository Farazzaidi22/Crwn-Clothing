import React from 'react'
import './header.styles.scss'

import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selector'
import { selectCurrentUser } from '../../redux/user/user.selector'


import { ReactComponent as ReactLogo} from '../../assets/crown.svg'
import { NavLink } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'



const Header = ( {currentUser, hidden} ) => (

        <div className='header'>

            <NavLink to='/' className='logo-container' >
                <ReactLogo className='logo'/>
            </NavLink>  

            <div className='options'>
                <NavLink to='/shop' className='option' >
                    SHOP
                </NavLink>

                <NavLink to='/shop' className='option' >
                    CONTACT
                </NavLink>
                {
                    currentUser ?
                    <div className='option' onClick={ () => auth.signOut()}>SIGN OUT</div>
                    :
                    <NavLink to='/signin' className='option' >
                        SIGN IN
                    </NavLink>
                }
                <CartIcon/>
            </div>
            {
                hidden ? null : <CartDropdown/>
            }
        </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)