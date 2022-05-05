import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
import {useDispatch, connect, useSelector} from 'react-redux';
import OrderItem from '../../components/molecules/order-item';
import {getOrders, removeOrder } from '../store/reducers/actions/order.action';
import {styles} from './style';

const Order = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.userId);
  const orders = useSelector(state => state.order.orders);
  const [loadingOrders, setLoadingOrders] = useState(false)

  const refresh = () => {
    setLoadingOrders(true)
    dispatch(getOrders(userId, () => {
      setLoadingOrders(false)
    }));
  }

  useEffect(() => {
    refresh()
  }, []);

  const onDelete = id => {
    dispatch(removeOrder(id));
  }
  const onDetails = id => {
    console.log(id);
  };

  const renderItem = ({item}) => {
    return <OrderItem data={item} onDelete={onDelete} onDetails={onDetails} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        contentContainerStyle={{
          flex: 1,
        }}
        data={orders}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        refreshControl={
          <RefreshControl
            onRefresh={refresh}
            refreshing={loadingOrders}
          />
        }
      />
    </View>
  );
};

export default connect()(Order);
