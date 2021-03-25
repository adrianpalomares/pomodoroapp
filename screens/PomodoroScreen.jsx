import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

const PomodoroScreen = ({ navigation }) => {
  // Timer
  const [currentTime, setCurrentTime] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(currentTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentTime]);

  return (
    <SafeAreaView>
      <Button title="Next Screen" onPress={() => navigation.navigate('ChangeTimeScreen', { currentTime, setCurrentTime })} />
      <Text>{currentTime}</Text>
    </SafeAreaView>
  );
};

PomodoroScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PomodoroScreen;
