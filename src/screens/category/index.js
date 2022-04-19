import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './styles';
import {PRODUCTS} from '../../constants/products';
import {useSelector, useDispatch, connect} from 'react-redux';

import CategoryProducts from '../../components/molecules/category-products';

const Category = ({navigation, route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const categoryProduct = useSelector(state => state.products.filteredProducts);
  const selectedCategory = useSelector(state => state.category.selectedCategory);
  // const selectedCategory = PRODUCTS.filter(product => product.category === id);
  const handleSelectCategory = product => {
    navigation.navigate('Product', {product, name: product.name});
  };
  const renderItem = ({item}) => (
    <CategoryProducts item={item} onSelected={handleSelectCategory} />
  );

  return (
      <View style={styles.container}>
        <FlatList
          data={categoryProduct}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
  );
};

export default Category;
