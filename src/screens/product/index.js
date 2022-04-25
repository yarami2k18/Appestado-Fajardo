import React from 'react';
import {useSelector, connect, useDispatch} from 'react-redux';
import {View, Text, Button} from 'react-native';
import {colors} from '../../constants/themes';
import {styles} from './styles';
import {addItem} from '../store/reducers/actions/cartaction';

const Products = ({navigation, route}) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.selectedProduct);
  const {name, description, price, weight} = product;

  const handleAddToCart = () => {
    dispatch(addItem(product));
    alert('Item agregado');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.text}>price: ${price}</Text>
        <Text style={styles.text}>weight: {weight}</Text>
        <Button
          title="Order now"
          onPress={handleAddToCart}
          color={colors.primaryColor}
        />
        <View style={styles.cartButton}>
          <Button
            title="Cart"
            onPress={() => navigation.navigate('Cart')}
            color="#655cff"
          />
        </View>
      </View>
    </View>
  );
};

export default connect()(Products);
