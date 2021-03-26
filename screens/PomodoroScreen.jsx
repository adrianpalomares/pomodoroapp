import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView, Text, Button, View, StyleSheet } from 'react-native';
import { vibrate } from '../utils';

const styles = StyleSheet.create({
  timeContainer: {
    // flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'pink',
  },
  timeText: {
    fontSize: 100,
  },
  timeActionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 20,
    backgroundColor: 'red',
  },
  changeTimeContainer: {
    marginTop: 5,
  },
});

/**
 * Converts currentTime from seconds into correct format. Show hours and minutes.
 * @param {number} currentTime
 * @returns currentTime in the correct format.
 */
function getTimeString(currentTime) {
  const date = new Date(0);
  date.setSeconds(currentTime);
  return date.toISOString().substr(14, 5);
}

const PomodoroScreen = ({ navigation }) => {
  // Timer
  const [currentTime, setCurrentTime] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  let interval = null;

  React.useEffect(() => {
    // TODO: Check for 0
    if (currentTime == 25) {
      // Vibrate then switch to other mode
      vibrate();
    }

    // Only starts timer if not paused
    if (!paused) {
      interval = setInterval(() => {
        // When the value is set in ChangeTime, it is treated as a string
        const valueInInteger = parseInt(currentTime);
        setCurrentTime(valueInInteger + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [currentTime, paused]);

  return (
    <SafeAreaView>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{getTimeString(currentTime)}</Text>
      </View>
      <View style={styles.timeActionContainer}>
        {paused ? (
          <Button title="Start" onPress={() => setPaused(false)} />
        ) : (
          <Button title="Pause" onPress={() => setPaused(true)} />
        )}
        <Button title="Reset" />
      </View>
      <View style={styles.changeTimeContainer}>
        <Button
          title="Change Time"
          onPress={() => navigation.navigate('ChangeTimeScreen', { currentTime, setCurrentTime })}
        />
      </View>
    </SafeAreaView>
  );
};

PomodoroScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PomodoroScreen;
