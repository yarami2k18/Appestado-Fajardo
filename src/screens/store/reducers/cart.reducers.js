import {cartTypes} from './types/cart.types';

const {ADD_ITEM, REMOVE_ITEM, CONFIRM_CART} = cartTypes;

const initialState = {
  items: [],
  total: 0,
};

const sumaTotal = list =>
  list
    .map(item => item.quantity * item.price)
    .reduce((acc, curr) => acc + curr, 0);

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const indexItem = state.items.findIndex(
        item => item.id === action.item.id,
      );
      if (indexItem === -1) {
        const item = {...action.item, quantity: 1};
        const updateCart = [...state.items, item];
        return {
          ...state,
          items: updateCart,
          total: sumaTotal(updateCart),
        };
      }

      const items = [...state.items].map(item => {
        if (item.id === action.item.id) item.quantity++;
        return item;
      });

      return {
        ...state,
        items,
        total: sumaTotal(items),
      };

    case REMOVE_ITEM:
      /*
        BUSCO EL ITEM EN EL CARRITO
        SI NO EXISTE
          NO HAGA NADA
        
        SI LA CANTIDAD DESPUES DE DECREMENTAR QUEDO EN CERO ENTONCES BORRO EL ITEM
        SI LA CANTIDAD DESPUES DE DECREMENTAR ES MAYOR A CERO ENTONCES LE DECREMENTO 1

        DEVUELVO EL NUEVO STATE, CON LOS ITEMS Y EL TOTAL RECALCULADO
      */

      const existingItem = state.items.find(item => item.id === action.id);
      if (!existingItem) {
        return state;
      }
      let cleanCart = null;
      if (existingItem.quantity - 1 < 1) {
        cleanCart = state.items.filter(item => item.id !== action.id);
      } else {
  
        cleanCart = state.items.map(item =>
          item.id === action.id ? {...item, quantity: item.quantity - 1} : item,
        );
      }
      return {
        ...state,
        items: cleanCart,
        total: sumaTotal(cleanCart),
      };
    case CONFIRM_CART:
      return state;
    default:
      return state;
  }
};

export default cartReducer;
