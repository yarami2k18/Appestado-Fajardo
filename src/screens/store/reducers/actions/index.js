import { createStore, combineReducers, applyMiddleware } from 'redux';
import categoryReducer from '../../reducers/category.reducers';
import productReducer from '../../reducers/product.reducer';
import cartReducer from '../../reducers/cart.reducers';
import authReducer from '../auth.reducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));