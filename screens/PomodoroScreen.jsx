import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

const PomodoroScreen = ({ navigation }) => (
  <SafeAreaView>
    <Button title="Next Screen" onPress={() => navigation.navigate('ChangeTimeScreen')} />
    <Text>Pomodoro Screen</Text>
  </SafeAreaView>
);

PomodoroScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PomodoroScreen;
