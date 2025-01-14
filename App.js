import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}