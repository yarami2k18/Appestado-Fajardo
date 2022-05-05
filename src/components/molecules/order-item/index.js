import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import IonicIcions from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

const OrderItem = ({data, onDelete, onDetails}) => {
  const {date, id, total} = data;

  const formatDate = time => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>{formatDate(date)}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.total}>total: $ {total}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => onDetails(id)}>
            <IonicIcions name="list-outline" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete(id)}>
            <IonicIcions name="trash-outline" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;
