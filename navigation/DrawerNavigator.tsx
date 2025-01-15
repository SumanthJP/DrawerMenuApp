import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomDrawerContent from '../components/CustomDrawerContent';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import OrdersScreen from '../screens/OrdersScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Cart" component={CartScreen} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
    <Tab.Screen name="Orders" component={OrdersScreen} />
  </Tab.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name="Main" component={TabNavigator} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
