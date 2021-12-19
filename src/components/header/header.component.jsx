import React from 'react'
import './header.styles.scss'

import { ReactComponent as ReactLogo} from '../../assets/crown.svg'
import { NavLink } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'


const Header = ( {currentUser} ) => (

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
        </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)