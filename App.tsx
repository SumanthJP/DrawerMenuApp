import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CustomDrawerContent from './components/CustomDrawerContent';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import OrdersScreen from './screens/OrdersScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <CustomDrawerContent {...props} />}
          screenOptions={{
            headerShown: false,
            drawerType: 'slide',
            drawerStyle: {
              width: '100%',
            },
          }}>
          <Drawer.Screen name="Start" component={HomeScreen} />
          <Drawer.Screen name="Your Cart" component={CartScreen} />
          <Drawer.Screen name="Favourites" component={FavoritesScreen} />
          <Drawer.Screen name="Your Orders" component={OrdersScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
