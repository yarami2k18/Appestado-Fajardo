import React, { useEffect } from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import CartItem from '../../components/molecules/cart-item/index';
import {styles} from './styles';
import { confirmCart, removeItem } from '../store/reducers/actions/cartaction';
import { colors } from '../../constants/themes';

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  const user = useSelector(state => state.auth.userId);

  const handleConfirmCart = () => {
    dispatch(confirmCart(items, total, user))
  }

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
      <Button title="Confirm" onPress={() => handleConfirmCart()} color={colors.primaryColor} />
      <View style={styles.footer}>
          <Text style={styles.total}>Total:</Text>
          <Text style={styles.totalPrice}>${total}</Text>
      </View>
    </View>
  );
};

export default connect()(Cart);
