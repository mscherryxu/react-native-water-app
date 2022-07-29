import {
  Text,
  StyleSheet,
  View,
  Animated,
  Dimensions,
  ProgressBarAndroid,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useMemo } from 'react';
import AltProgress from './AltProgress';
import { RootTagContext } from 'react-native/Libraries/ReactNative/RootTag';
import GoalModal from './GoalModal';

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
        <Text styles={{ textAlign: 'center' }}>
          {currentWater}/{waterGoal}
        </Text>
        <View style={styles.body}>
          <View style={styles.waterContainer}>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                borderWidth: 1,
                alignItems: 'center',
              }}
            >
              <Text>{waterGoal}</Text>
              <Text>{waterGoal * 0.75}</Text>
              <Text>{waterGoal * 0.5}</Text>
              <Text>{waterGoal * 0.25}</Text>
              <Text>0</Text>
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                borderWidth: 1,
                alignContent: 'center',
              }}
            >
              <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={currentWater / waterGoal}
                style={{
                  transform: [
                    { rotate: '270deg' },
                    { scaleY: 4 },
                    { scaleY: -4 },
                    { scaleX: 4.3 },
                  ],
                  flexBasis: '100%',
                  color: 'steelblue',
                }}
              />
            </View>
          </View>
          <View style={styles.waterButtonHolder}>
            {goalMet ? (
              <View style={styles.waterButtons}>
                <TouchableOpacity activeOpacity={0.5}>
                  <Image
                    source={require('../public/water-cup.png')}
                    style={{ resizeMode: 'center' }}
                  />
                </TouchableOpacity>
                <Button title={`Add 8oz`} onPress={addCup} />
                <Button title={`Add 12oz`} onPress={addCan} />
                <Button title={`Add 16oz`} onPress={addBottle} />
                <View style={styles.resetButton}>
                  <Button title={'Reset'} onPress={reset} color="gold" />
                </View>
              </View>
            ) : (
              <Text
                style={{
                  color: 'red',
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                Congrats, you did it!
                <GoalModal reset={reset} />
              </Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.footer}></View>
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
  },
  container: {
    flex: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  goal: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 30,
    flexDirection: 'row',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  waterContainer: {
    flex: 2,
    height: '100%',
    backgroundColor: 'white',
    borderWidth: 5,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  waterScale: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
    borderWidth: 5,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  waterButtonHolder: {
    flex: 1,
    height: '100%',
    backgroundColor: 'lightgrey',
    borderColor: 'grey',
    borderWidth: 5,
  },
  waterLevel: {
    //make match water container eventually
    //height: 100????
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
  },
  waterButtons: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

// remove/undo
// custom add/remove fl oz
// cup icon
