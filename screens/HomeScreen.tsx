import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerScreenProps, useDrawerProgress} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

type HomeScreenProps = DrawerScreenProps<any, 'Start'>;

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const progress = useDrawerProgress(); // Get drawer progress (0 to 1)

  // Animated styles for the tilting and rounded corners effect
  const animatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(progress.value, [0, 1], [0, -10]); // Rotate up to -10 degrees
    const borderRadius = interpolate(progress.value, [0, 1], [0, 20]); // Add rounded corners
    return {
      transform: [{perspective: 1000}, {rotateY: `${rotateY}deg`}],
      borderRadius,
      overflow: 'hidden', // Ensures the content respects the rounded corners
    };
  });

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Animated.View style={[styles.content, animatedStyle]}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.toggleDrawer()}>
            <View style={styles.hamburgerIcon}>
              <View style={styles.hamburgerLine} />
              <View style={styles.hamburgerLine} />
              <View style={styles.hamburgerLine} />
            </View>
          </TouchableOpacity>
          <Text style={styles.title}>S T A R T</Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1, // Wrapping content to apply tilt and rounded corners
    backgroundColor: '#ffffff', // Ensures the background is visible for rounded corners
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    padding: 8,
    marginRight: 32,
  },
  hamburgerIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
  },
  hamburgerLine: {
    width: 24,
    height: 2,
    backgroundColor: '#000000',
    marginVertical: 2,
  },
  title: {
    fontSize: 24,
    color: '#000000',
    letterSpacing: 4,
    fontWeight: '400',
  },
});

export default HomeScreen;
