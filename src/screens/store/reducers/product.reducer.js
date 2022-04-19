import { PRODUCTS } from '../../../constants/products';

const initialState = {
    products: PRODUCTS,
    filteredProducts: [],
    selectedProduct: null,
}

const productReducer = (state = initialState, action) => {
    return state;
}

export default productReducer;