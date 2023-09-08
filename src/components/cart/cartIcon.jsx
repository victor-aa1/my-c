import { ReactComponent as ShoppingIcon } from "react";

import '../cart.scss';

const Cart = () => {
    return(
        <div className="cartIcon-container">
            <ShoppingIcon className='shopping-icon' />
            <span className="cart-count">0</span>
        </div>
    )
}

export default Cart;