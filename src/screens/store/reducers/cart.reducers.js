import { CART } from "../../../constants/cart";

const initialState = {
    items: CART,
    total: 10.00,
}

const cartReducer = (state = initialState, action) => {
    return state;
}

export default cartReducer;