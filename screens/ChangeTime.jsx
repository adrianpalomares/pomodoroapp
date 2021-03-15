import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

const ChangeTimeScreen = ({ navigation }) => (
  <SafeAreaView>
    <Button title="Next Screen" onPress={() => navigation.navigate('Change Time')} />
  </SafeAreaView>
);

ChangeTimeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ChangeTimeScreen;
