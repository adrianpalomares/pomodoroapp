/* eslint-disable react/style-prop-object */
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Appearance } from 'react-native-appearance';
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

const Stack = createStackNavigator();
export default function App() {
  const scheme = Appearance.getColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Pomodoro" screenOptions={{ headerBackTitle: 'Back' }}>
        <Stack.Screen name="Pomodoro" component={PomodoroScreen} />
        <Stack.Screen name="ChangeTimeScreen" component={ChangeTimeScreen} options={{ title: 'Settings' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
