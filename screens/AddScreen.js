import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
  Button,
} from 'react-native';
import waterReducer, {
  updateConsumption,
  resetGoal,
  setGoal,
} from '../src/store/waterReducer';
import React, { useState, useMemo } from 'react';
import ProgressBar from './ProgressBar';

export function AddScreen() {
  const [currentWater, setCurrentWater] = useState(() => setInitialWater());
  const [waterGoal, setWaterGoal] = useState(() => setInitialGoal());

  function setInitialWater() {
    return 0;
  }

  function setInitialGoal() {
    return 128;
  }

  function addCup() {
    // styles.waterBar.height += 8;
    return setCurrentWater(currentWater + 8);
  }

  function addCan() {
    return setCurrentWater(currentWater + 12);
  }

  function addBottle() {
    return setCurrentWater(currentWater + 16);
  }

  function reset() {
    setCurrentWater(0);
    setWaterGoal(128);
    return;
  }

  const goalMet = useMemo(() => {
    if (currentWater >= waterGoal) {
      return false;
    } else {
      return true;
    }
  }, [currentWater]);

  return (
    <View style={styles.wholeScreen}>
      <Text>Temp Water Name</Text>
      <View style={styles.container}>
        <Text style={styles.goal}>Goal: {waterGoal} oz</Text>
        <View style={styles.body}>
          <Text style={styles.waterLevel}>{currentWater}</Text>
          <View style={styles.waterContainer}>
            {/* <View style={styles.waterScale}></View> */}
            <ProgressBar
              step={currentWater}
              steps={waterGoal}
              height={waterGoal}
            />
            {/* <View style={styles.waterBarContainer}>
              <View style={styles.waterBar}></View>
            </View> */}
            <View style={styles.waterLabel}></View>
          </View>
          {goalMet ? (
            <View style={styles.waterButtons}>
              <Button title={`Add Cup (8oz / 240mL)`} onPress={addCup} />
              <Button title={`Add Can (12oz / 360mL)`} onPress={addCan} />
              <Button title={`Add Bottle (16oz / 480mL)`} onPress={addBottle} />
            </View>
          ) : (
            <Text>Congrats, you did it!</Text>
          )}
        </View>
      </View>
      <View style={styles.resetButton}>
        <Button title={'Reset'} onPress={reset} />
      </View>
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
    flex: 10,
    backgroundColor: 'lightgreen',
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
    flex: 10,
    flexDirection: 'row',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  waterContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 40,
  },
  waterScale: {
    flex: 1,
    backgroundColor: 'lightgrey',
    width: '15%',
    borderWidth: 1,
    borderColor: 'grey',
  },
  // waterBarContainer: {
  //   flex: 1,
  //   backgroundColor: 'lightgrey',
  //   width: '35%',
  //   borderWidth: 1,
  //   borderColor: 'steelblue',
  //   position: 'relative',
  // },
  waterLevel: {
    //make match water container eventually
    //height: 100????
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
  },
  // waterBar: {
  //   backgroundColor: 'powderblue',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flexDirection: 'column',
  //   height: 0,
  //   position: 'absolute',
  // },
  waterButtons: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  resetButton: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
