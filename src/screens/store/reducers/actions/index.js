import { createStore, combineReducers, applyMiddleware } from 'redux';
import categoryReducer from '../../reducers/category.reducers';
import productReducer from '../../reducers/product.reducer';
import cartReducer from '../../reducers/cart.reducers';
import authReducer from '../auth.reducer';
import orderReducer from '../../reducers/order.reducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
    order: orderReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));