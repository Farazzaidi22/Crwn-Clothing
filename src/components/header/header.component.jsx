import React from 'react'
import './header.styles.scss'

import { ReactComponent as ReactLogo} from '../../assets/crown.svg'
import { NavLink } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'


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
            </div>
        </div>
)

export default Header