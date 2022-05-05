import {URL_API} from '../../../../../utils/database';
import {orderTypes} from '../types/order.types';

const {GET_ORDER, REMOVE_ORDER} = orderTypes;

const orderByUser = (data, user) => {
  const orders = Object.keys(data).map(key => ({
    ...data[key],
    id: key,
  }));
  return orders.filter(order => order.user === user);
};

export const getOrders = (user, onSuccess) => {
  return async dispatch => {
    debugger
    try {
      const url = `${URL_API}/order.json`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      });
      const result = JSON.parse(await response.text());

      let list = [];
      if (result !== 'null') {
        list = orderByUser(result, user);
      }

      onSuccess?.()
      dispatch({
        type: GET_ORDER,
        orders: list,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const removeOrder = (orderId) => {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_API}/order/${orderId}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();

      console.warn(result);

      dispatch({
        type: REMOVE_ORDER,
        orderId
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

