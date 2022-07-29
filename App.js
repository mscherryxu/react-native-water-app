import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddScreen } from './screens/AddScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <AddScreen />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#BFD7EA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
