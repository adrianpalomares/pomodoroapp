import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, SafeAreaView, Text, TextInput, View, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

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
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonStyle: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    padding: 10,
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
  const { colors } = useTheme();
  // Text input value
  const [pomodoroMinuteValue, setPomodoroMinuteValue] = React.useState(Math.floor(route.params.pomodoroTime / 60)); // initial values will come from the current ones on the app
  const [pomodoroSecondValue, setPomodoroSecondValue] = React.useState(route.params.pomodoroTime % 60);

  const [breakMinuteValue, setBreakMinuteValue] = React.useState(Math.floor(route.params.breakTime / 60));
  const [breakSecondValue, setBreakSecondValue] = React.useState(route.params.breakTime % 60);

  return (
    <SafeAreaView>
      {/* <Button title="Next Screen" onPress={() => navigation.navigate('Change Time')} /> */}
      <View style={styles.centering}>
        <Text style={[styles.heading, { color: colors.text }]}>Pomodoro Time</Text>
      </View>
      <View>
        <Text style={{ color: colors.text }}>Minutes</Text>
        <TextInput
          value={pomodoroMinuteValue.toString()}
          onChangeText={setPomodoroMinuteValue}
          style={styles.minutesTextInput}
          keyboardType="numeric"
          keyboardAppearance="dark"
          returnKeyType="done"
        />
      </View>
      <View>
        <Text style={{ color: colors.text }}>Seconds</Text>
        <TextInput
          value={pomodoroSecondValue.toString()}
          onChangeText={setPomodoroSecondValue}
          style={styles.minutesTextInput}
          keyboardType="numeric"
          keyboardAppearance="dark"
          returnKeyType="done"
        />
      </View>
      <View style={styles.centering}>
        <Text style={[styles.heading, { color: colors.text }]}>Break Time</Text>
      </View>
      <View>
        <Text style={{ color: colors.text }}>Minutes</Text>
        <TextInput
          value={breakMinuteValue.toString()}
          onChangeText={setBreakMinuteValue}
          style={styles.minutesTextInput}
          keyboardType="numeric"
          keyboardAppearance="dark"
          returnKeyType="done"
        />
      </View>
      <View>
        <Text style={{ color: colors.text }}>Seconds</Text>
        <TextInput
          value={breakSecondValue.toString()}
          onChangeText={setBreakSecondValue}
          style={styles.minutesTextInput}
          keyboardType="numeric"
          keyboardAppearance="dark"
          returnKeyType="done"
        />
      </View>
      <View style={styles.actionContainer}>
        {/* TODO: Handle empty value, null by default */}
        {/* <Button
          title="Set Minutes"
          // TODO: Add break time update, also using wrong value
          onPress={() => {
            route.params.setPomodoroTime(convertToSeconds(pomodoroMinuteValue, pomodoroSecondValue));
            route.params.setBreakTime(convertToSeconds(breakMinuteValue, breakSecondValue));
            alert('Time updated!');
          }}
        /> */}
        <TouchableWithoutFeedback
          style={styles.buttonStyle}
          onPress={() => {
            route.params.setPomodoroTime(convertToSeconds(pomodoroMinuteValue, pomodoroSecondValue));
            route.params.setBreakTime(convertToSeconds(breakMinuteValue, breakSecondValue));
            alert('Time updated!');
          }}
        >
          <Text style={{ color: 'white', fontSize: 25 }}>Apply</Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

ChangeTimeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired,
  route: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ChangeTimeScreen;
