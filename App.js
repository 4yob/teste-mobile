import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//import TabNavigator from './navigation/TabNavigator';
import HomeScreen from './screens/Home';

export default function App() {
  return(
    <NavigationContainer>
      {/* <TabNavigator /> */}
      <HomeScreen />
    </NavigationContainer>
  );
}