import { useNavigate, useParams } from 'react-router-dom'

import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from 'reselect';


import CustomButton from "../custom-button/custom-buton.component";
import CartItem from "../cart-item/cart-item.component";



import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems }) => {
    let navigate = useNavigate();
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartItems.length ? 
                (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                        )
                    )
                )

                : (
                    <span className="empty-message">Your cart is empty</span>
                )
            }
            </div>
            <CustomButton onClick={ () => navigate(`/checkout`)}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

const withRouter = WrappedComponent => props => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks
  
    return (
      <WrappedComponent
        {...props}
        params={params}
        // etc...
      />
    );
  };

export default withRouter(connect(mapStateToProps)(CartDropdown))