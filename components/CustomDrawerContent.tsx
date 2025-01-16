import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';

const {width} = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.85;

interface CustomDrawerContentProps {
  navigation: any;
  state: any;
}

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({
  navigation,
  state,
}) => {
  const menuItems = [
    {name: 'Start', label: 'Start'},
    {name: 'Your Cart', label: 'Your Cart'},
    {name: 'Favourites', label: 'Favourites'},
    {name: 'Your Orders', label: 'Your Orders'},
  ];

  return (
    <Animated.View style={[styles.mainContainer]}>
      <View style={styles.drawer}>
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
          <DrawerContentScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}>
            <Text style={styles.headerTitle}>Beka</Text>

            <View style={styles.menuItems}>
              {menuItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.menuItem,
                    state.index === index && styles.activeMenuItem,
                  ]}
                  onPress={() => navigation.navigate(item.name)}>
                  <Text
                    style={[
                      styles.menuItemText,
                      state.index === index && styles.activeMenuItemText,
                    ]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={styles.signOutButton}
              onPress={() => {
                navigation.closeDrawer();
              }}>
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
          </DrawerContentScrollView>
        </SafeAreaView>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: DRAWER_WIDTH + 50, // Added extra width to account for the tilt
    backgroundColor: '#121212',
    transform: [{skewX: '10deg'}], // Changed angle and direction
    marginLeft: -50, // Adjusted to account for the tilt
    paddingLeft: 30,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  drawer: {
    flex: 1,
    transform: [{skewX: '-10deg'}], // Counter-transform for content
    marginLeft: 20, // Added to adjust content position
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 50,
    paddingHorizontal: 20,
  },
  menuItems: {
    flex: 1,
    paddingRight: 40, // Added to prevent text from getting too close to the edge
  },
  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginHorizontal: 12,
    marginVertical: 4,
    borderRadius: 8,
  },
  activeMenuItem: {
    backgroundColor: '#242424',
  },
  menuItemText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '400',
  },
  activeMenuItemText: {
    fontWeight: '500',
  },
  signOutButton: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  signOutText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '400',
  },
});

export default CustomDrawerContent;
