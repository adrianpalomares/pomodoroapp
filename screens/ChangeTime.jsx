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

const ChangeTimeScreen = ({ navigation, route }) => (
  // route.params.setCurrentTime(0);
  <SafeAreaView>
    {/* <Button title="Next Screen" onPress={() => navigation.navigate('Change Time')} /> */}
    <View>
      <Text>Select Minutes</Text>
      <TextInput
        style={styles.minutesTextInput}
        keyboardType="numeric"
        keyboardAppearance="dark"
        returnKeyType="done"
      />
    </View>
    <View>
      <Button title="Set Minutes" />
    </View>
  </SafeAreaView>
);

ChangeTimeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired,
  route: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ChangeTimeScreen;
