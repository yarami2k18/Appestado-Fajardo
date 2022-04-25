import { URL_API } from '../../../../../utils/database'
import { cartTypes } from '../types/cart.types'

const {ADD_ITEM,REMOVE_ITEM,CONFIRM_CART } = cartTypes;

export const addItem = (item) => ({
    type: ADD_ITEM,
    item
});

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    id
});

export const confirmItem = (cart) => ({
    type: CONFIRM_CART,
    cart
});