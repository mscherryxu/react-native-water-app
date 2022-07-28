import { StyleSheet, View, Button, Text } from 'react-native';
import waterReducer, {
  updateConsumption,
  resetGoal,
  setGoal,
} from '../src/store/waterReducer';
import React, { useState, useEffect } from 'react';

export function AddScreen() {
  const [currentWater, setCurrentWater] = useState(() => setInitialWater());

  function setInitialWater() {
    return 0;
  }

  function addCup() {
    return setCurrentWater(currentWater + 8);
  }

  function addCan() {
    return setCurrentWater(currentWater + 12);
  }

  function addBottle() {
    return setCurrentWater(currentWater + 16);
  }
  return (
    <View style={styles.wholeScreen}>
      <Text>Temp Water Name</Text>
      <View style={styles.container}>
        <View style={styles.goal}></View>
        <View style={styles.body}>
          <View style={styles.waterContainer}>
            <View>
              <Text style={styles.waterLevel}>{currentWater}</Text>
            </View>
            <View style={styles.waterLabel}></View>
          </View>
          <View style={styles.waterButtons}>
            <Button title={`Add Cup (8oz / 240mL)`} onPress={addCup} />
            <Button title={`Add Can (12oz / 360mL)`} onPress={addCan} />
            <Button title={`Add Bottle (16oz / 480mL)`} onPress={addBottle} />
          </View>
        </View>
      </View>
      <View style={styles.resetButton}>{/* <ResetButton /> */}</View>
    </View>
  );
}

//button 1, 2, 3
/* on press, button will change color and water level will increase based on the button pressed */

//WaterHolder
/* will hold the water level and the water level will increase when the button is pressed */

//WaterLabel
/* will display the water breakpoints at 0, 25, 50, 75, 100% 
on press changes from oz to mL */

//WaterLevel
/* will grow vertically based on the water level */

const styles = StyleSheet.create({
  wholeScreen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goal: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  waterContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  waterLevel: {
    //make match water container eventually
    //height: 100????
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  waterLabel: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  waterButtons: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  resetButton: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
