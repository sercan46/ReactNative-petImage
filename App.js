// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home';
import DogScreen from './src/screens/Dog';
import CatScreen from './src/screens/Cat';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'black' ,alignSelf:'center'},
        }} >
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Home',
        }} />
        <Stack.Screen name="DogPage" options={{
          title: 'Cute Dogs',
        }}component={DogScreen} />
        <Stack.Screen name="CatPage" options={{
          title: 'Cute Cats',
        }}component={CatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;