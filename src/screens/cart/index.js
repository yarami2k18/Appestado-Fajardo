import React, { useEffect } from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import CartItem from '../../components/molecules/cart-item/index';
import {styles} from './styles';
import { removeItem } from '../store/reducers/actions/cartaction';

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Carrito'
    })
  }, [navigation])

  const handleDeleteItem = id => dispatch(removeItem(id))

  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={(item => item.id.toString())}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
          <Text style={styles.total}>Total:</Text>
          <Text style={styles.totalPrice}>${total}</Text>
      </View>
    </View>
  );
};

export default connect()(Cart);
