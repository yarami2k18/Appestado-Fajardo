import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CartNavigator from './cart';
import OrderNavigator from './order';
import ShophNavigator from './shop';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants/themes';

const TabStack = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <TabStack.Navigator
      initialRouteName="shop"
      screenOptions={{
        headerShown: false,
      }}>
      <TabStack.Screen
        name="shop"
        component={ShophNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <IonicIcons name={focused ? 'home' : 'home-outline'} size={20} />
          ),
        }}
      />
      <TabStack.Screen
        name="CartNavigator"
        component={CartNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <IonicIcons name={focused ? 'cart' : 'cart-outline'} size={20} />
          ),
        }}
      />
      <TabStack.Screen
        name="OrderNavigator"
        component={OrderNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <IonicIcons name={focused ? 'create' : 'create-outline'} size={20} />
          ),
        }}
      />
    </TabStack.Navigator>
  );
};

export default MainNavigator;
