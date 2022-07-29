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

/* Features to add:
- Changing the goal
- Customizing water increments
- Animating water progress bar
- Modal view for reset button (are you sure you want to reset? Y/N)
- Screen rotate support
- Calendar and data storage (redux store)
- Support for iOS and web (some React Native elements were platform-specific)
*/

/* Bugs we ran into:
- Installing `pods` was not working for iOS support
- Issues with animation functions
- Issues with image and font formats (.png files refusing to flex)
- Inconsistencies in display across Android devices
*/
