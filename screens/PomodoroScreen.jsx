import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView, Text, Button, View, StyleSheet } from 'react-native';

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

const PomodoroScreen = ({ navigation }) => {
  // Timer
  const [currentTime, setCurrentTime] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      // When the value is set in ChangeTime, it is treated as a string
      const valueInInteger = parseInt(currentTime);
      setCurrentTime(valueInInteger + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentTime]);

  return (
    <SafeAreaView>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{currentTime}</Text>
      </View>
      <View style={styles.timeActionContainer}>
        <Button title="Start" />
        <Button title="Pause" />
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
