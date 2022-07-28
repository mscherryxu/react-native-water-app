import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import waterReducer from './src/store/waterReducer';
import AddScreen from './screens/AddScreen';

const store = createStore(waterReducer);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AddScreen />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
