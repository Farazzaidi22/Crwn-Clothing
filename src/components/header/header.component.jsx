import React from 'react'
import './header.styles.scss'

import { ReactComponent as ReactLogo} from '../../assets/crown.svg'
import { NavLink } from 'react-router-dom'

const Header = () => (

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
            </div>
        </div>
)

export default Header