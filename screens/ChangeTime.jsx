import PropTypes from 'prop-types';
import React from 'react';
import { Button, SafeAreaView, Text, TextInput, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centering: {
    // justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 50,
  },
  minutesTextInput: {
    backgroundColor: '#fff',
    height: 30,
    width: '50%',
  },
});

/**
 * Will accept minutes and seconds as input and covert them into seconds. Helpful, because the application
 * runs on seconds.
 * @param {*} minutes
 * @param {*} seconds
 * @returns
 */
function convertToSeconds(minutes, seconds) {
  return minutes * 60 + parseInt(seconds); // was treating seconds as a string
}

const ChangeTimeScreen = ({ navigation, route }) => {
  // Text input value
  const [pomodoroMinuteValue, setPomodoroMinuteValue] = React.useState(null);
  const [pomodoroSecondValue, setPomodoroSecondValue] = React.useState(null);

  const [breakMinuteValue, setBreakMinuteValue] = React.useState(null);
  const [breakSecondValue, setBreakSecondValue] = React.useState(null);

  // route.params.setCurrentTime(0);
  return (
    <SafeAreaView>
      {/* <Button title="Next Screen" onPress={() => navigation.navigate('Change Time')} /> */}
      <View style={styles.centering}>
        <Text style={styles.heading}>Pomodoro Time</Text>
      </View>
      <View>
        <Text>Minutes</Text>
        <TextInput
          value={pomodoroMinuteValue}
          onChangeText={setPomodoroMinuteValue}
          style={styles.minutesTextInput}
          keyboardType="numeric"
          keyboardAppearance="dark"
          returnKeyType="done"
        />
      </View>
      <View>
        <Text>Seconds</Text>
        <TextInput
          value={pomodoroSecondValue}
          onChangeText={setPomodoroSecondValue}
          style={styles.minutesTextInput}
          keyboardType="numeric"
          keyboardAppearance="dark"
          returnKeyType="done"
        />
      </View>
      <View style={styles.centering}>
        <Text style={styles.heading}>Break Time</Text>
      </View>
      <View>
        <Text>Minutes</Text>
        <TextInput
          value={breakMinuteValue}
          onChangeText={setBreakMinuteValue}
          style={styles.minutesTextInput}
          keyboardType="numeric"
          keyboardAppearance="dark"
          returnKeyType="done"
        />
      </View>
      <View>
        <Text>Seconds</Text>
        <TextInput
          value={breakSecondValue}
          onChangeText={setBreakSecondValue}
          style={styles.minutesTextInput}
          keyboardType="numeric"
          keyboardAppearance="dark"
          returnKeyType="done"
        />
      </View>
      <View>
        {/* TODO: Handle empty value, null by default */}
        <Button
          title="Set Minutes"
          // TODO: Add break time update, also using wrong value
          onPress={() => {
            route.params.setPomodoroTime(convertToSeconds(pomodoroMinuteValue, pomodoroSecondValue));
            route.params.setBreakTime(convertToSeconds(breakMinuteValue, breakSecondValue));
            alert('Time updated!');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

ChangeTimeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired,
  route: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ChangeTimeScreen;
