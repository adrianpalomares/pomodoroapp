/* eslint-disable react/style-prop-object */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
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
  const scheme = useColorScheme();
  alert(scheme)
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Pomodoro" screenOptions={{ headerBackTitle: 'Back' }}>
        <Stack.Screen name="Pomodoro" component={PomodoroScreen} />
        <Stack.Screen name="ChangeTimeScreen" component={ChangeTimeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
