import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { vibrate } from '../utils';
// Default blue: #007AFF
const styles = StyleSheet.create({
  timeContainer: {
    // flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    // backgroundColor: 'pink',
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
    // backgroundColor: 'red',
  },
  actionButtons: {
    marginLeft: 15,
    marginTop: 50,
  },
  changeTimeContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//TODO: Accept hours
/**
 * Converts currentTime from seconds into correct format. Only shows minutes and seconds.
 * @param {number} currentTime A reference to currentTime inside PomodoroScreenComponent
 * @returns currentTime in the correct format.
 */
function getTimeString(currentTime) {
  const date = new Date(0);
  date.setSeconds(currentTime);
  return date.toISOString().substr(14, 5);
}

// TODO: Also get a reference to the interval so we can clear it.
/**
 * Restart pomodoro time. After this function is executed, the timer will be in the state of pomodoro.
 * @param {*} pomodoroTime
 * @param {*} setCurrentTime
 * @param {*} setIsBreak
 * @param {*} setPaused
 */
function resetTimer(pomodoroTime, setCurrentTime, setIsBreak, setPaused) {
  // Pause timer first, and set isBreak to false
  setPaused(true);
  setIsBreak(false);

  // Reset pomodoro time
  setCurrentTime(pomodoroTime);
}

const PomodoroScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [pomodoroTime, setPomodoroTime] = React.useState(1500); // Default is 25 minutes
  const [breakTime, setBreakTime] = React.useState(300); // Default is 5 minutes
  // Timer
  const [currentTime, setCurrentTime] = React.useState(pomodoroTime);
  const [paused, setPaused] = React.useState(true);
  // Used to tell if it is break time
  const [isBreak, setIsBreak] = React.useState(false);

  let interval = null;
  React.useEffect(() => {
    // TODO: Check for 0
    if (currentTime == 0) {
      // Vibrate then switch to other mode
      vibrate();
      setCurrentTime(isBreak ? pomodoroTime : breakTime);
      setIsBreak(!isBreak);
    }

    // Only starts timer if not paused
    if (!paused) {
      interval = setInterval(() => {
        // When the value is set in ChangeTime, it is treated as a string
        const valueInInteger = parseInt(currentTime);
        setCurrentTime(valueInInteger - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [currentTime, paused]);

  // If the time changes, it will update it by resetting
  React.useEffect(() => {
    resetTimer(pomodoroTime, setCurrentTime, setIsBreak, setPaused);
  }, [pomodoroTime, breakTime]);

  return (
    <SafeAreaView>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: colors.text }}>
          {isBreak ? 'Break Timer' : 'Work Timer'}
        </Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={[styles.timeText, { color: colors.text }]}>{getTimeString(currentTime)}</Text>
      </View>
      <View style={styles.timeActionContainer}>
        {paused ? (
          <TouchableWithoutFeedback
            style={{ marginRight: 15, backgroundColor: 'green', borderRadius: 20, padding: 10 }}
            onPress={() => setPaused(false)}
          >
            <Text style={{ color: 'white', fontSize: 25 }}>Start</Text>
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback
            style={{ marginRight: 15, backgroundColor: 'red', borderRadius: 20, padding: 10 }}
            onPress={() => setPaused(true)}
          >
            <Text style={{ color: 'white', fontSize: 25 }}>Pause</Text>
          </TouchableWithoutFeedback>
        )}

        <TouchableWithoutFeedback
          style={{ backgroundColor: '#007AFF', borderRadius: 20, padding: 10 }}
          onPress={() => resetTimer(pomodoroTime, setCurrentTime, setIsBreak, setPaused)}
        >
          <Text style={{ color: 'white', fontSize: 25 }}>Reset</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.changeTimeContainer}>
        <TouchableWithoutFeedback
          style={{ backgroundColor: '#007AFF', borderRadius: 20, padding: 10 }}
          onPress={() =>
            navigation.navigate('ChangeTimeScreen', {
              currentTime,
              setCurrentTime,
              pomodoroTime,
              setPomodoroTime,
              breakTime,
              setBreakTime,
            })
          }
        >
          <Text style={{ color: 'white', fontSize: 25 }}>Settings</Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

PomodoroScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PomodoroScreen;
