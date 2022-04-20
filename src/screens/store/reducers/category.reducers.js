import { CATEGORIES } from '../../../constants/categories';
import { selectedCategory } from './actions/category.actions';
import { categoryTypes } from './types/category.types';

const { SELECT_CATEGORY } = categoryTypes;

const initialState = {
    categories: CATEGORIES,
    selectedCategory: null,
}

const categoryReducer = (state = initialState, action) => {
    console.log('action:', action)
   switch (action.type) {
   
    case SELECT_CATEGORY:
        
        const indexCategory = state.categories.findIndex(category => category.id === action.categoryId)
        if (indexCategory == -1) return state
        return {
            ...state,
            selectedCategory: state.categories[indexCategory]
        }
        default:
            return state
   }
}

export default categoryReducer;