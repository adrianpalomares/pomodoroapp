/* eslint-disable react/style-prop-object */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ChangeTimeScreen from './screens/ChangeTime';
// import { StyleSheet } from 'react-native';
import PomodoroScreen from './screens/PomodoroScreen';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// Theme setup

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pomodoro" screenOptions={{ headerBackTitle: 'Back' }}>
        <Stack.Screen name="Pomodoro" component={PomodoroScreen} />
        <Stack.Screen name="ChangeTimeScreen" component={ChangeTimeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
