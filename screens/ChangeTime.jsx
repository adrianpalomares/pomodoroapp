import PropTypes from 'prop-types';
import React from 'react';
import { Button, SafeAreaView, Text, TextInput, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  minutesTextInput: {
    backgroundColor: '#fff',
    height: 30,
    width: '50%',
  },
});

const ChangeTimeScreen = ({ navigation, route }) => {
  // Text input value
  const [minuteValue, setMinuteValue] = React.useState(null);
  // route.params.setCurrentTime(0);
  return (
    <SafeAreaView>
      {/* <Button title="Next Screen" onPress={() => navigation.navigate('Change Time')} /> */}
      <View>
        <Text>Select Minutes</Text>
        <TextInput
          value={minuteValue}
          onChangeText={setMinuteValue}
          style={styles.minutesTextInput}
          keyboardType="numeric"
          keyboardAppearance="dark"
          returnKeyType="done"
        />
      </View>
      <View>
        <Button
          title="Set Minutes"
          onPress={() => {
            alert(minuteValue);
            route.params.setCurrentTime(minuteValue);
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
