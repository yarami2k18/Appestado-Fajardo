import { createStore, combineReducers } from 'redux';
import categoryReducer from '../../reducers/category.reducers';
import productReducer from '../../reducers/product.reducer';

const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productReducer,
});

export default createStore(rootReducer);