import react from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import {colors} from '../../../constants/themes';

const CartItem = ({item, onDelete}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.details}>
        <View>
          <Text style={styles.queanty}>cantidad: {item.quanty}</Text>
        </View>
        <View>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <View>
          <Button
            title="Borrar"
            onPress={() => onDelete(item.id)}
            color={colors.primaryColor}
          />
        </View>
      </View>
    </View>
  );
};

export default CartItem;
