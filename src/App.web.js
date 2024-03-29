import React from 'react';
import { StyleSheet, View } from 'react-native';
import BrowserAppContainer from './navigation/BrowserAppContainer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BrowserAppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
