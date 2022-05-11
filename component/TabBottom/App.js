import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home,Details} from "./Screens"


const TabBottomStack = createBottomTabNavigator();

const TabBottomApp = () => {
  return( <NavigationContainer>

<TabBottomStack.Navigator>


<TabBottomStack.Screen  name='Home'  component={Home} />

<TabBottomStack.Screen  name='Details'  component={Details} />


</TabBottomStack.Navigator>

  </NavigationContainer>);
};

export default TabBottomApp;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
