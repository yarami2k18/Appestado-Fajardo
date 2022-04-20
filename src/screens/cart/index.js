import react from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect, useSelector} from 'react-redux';
import CartItem from '../../components/molecules/cart-item/index';
import {styles} from './styles';

const Cart = ({navigation}) => {
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

  const handleDeleteItem = id => console.log(id);

  const renderItem = ({item}) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={(item => item.id, toString())}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
          <Text style={styles.total}>total</Text>
          <Text style={styles.totalPrice}>$(total)</Text>

      </View>
    </View>
  );
};

export default connect()(Cart);
