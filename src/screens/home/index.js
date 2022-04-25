import React, {useEffect} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useSelector, useDispatch, connect} from 'react-redux';
import CategoryGrid from '../../components/molecules/category-grid/index';
import {selectedCategory} from '../store/reducers/actions/category.actions';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);
  
  // Traigo el total de redux, el cual fue seteado antes en el cart reducer
  // cuando se agregaron items al carrito
  const total = useSelector(state => state.cart.total);

  const handleSelectCategory = category => {
    dispatch(selectedCategory(category.id));
    navigation.navigate('Category', {name: category.name});
  };

  const renderItem = ({item}) => (
    <CategoryGrid item={item} onSelected={handleSelectCategory} />
  );

  // useEffect es una funcion que se va a ejecutar cada vez que cambie algo de
  // lo que esta dentro delos corchetes [navigation, total]
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Yara's store",
      headerShown: true,
      headerRight: () => (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Cart')
        }}>
          <Text style={styles.totalText}>🛒 ${total}</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, total]);

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default connect()(Home);
