import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ProgressBarAndroid,
  Button,
  Image,
} from 'react-native';
import React, { useState, useMemo } from 'react';
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
      <View style={styles.headerView}>
        <Text style={styles.header}>!~ HYDRO HOMIE ~!</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.goal}>Goal: {waterGoal} oz</Text>
        <Text style={styles.goal}>
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
                    { scaleX: 5.1 },
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
                <View>
                  <Pressable onPress={() => addCup()}>
                    <Image
                      style={{ resizeMode: 'center', width: 80, height: 60 }}
                      source={require('../public/water-cup.png')}
                    />
                  </Pressable>
                  <Button title={`Add 8oz`} onPress={addCup} />
                </View>
                <View>
                  <Pressable onPress={() => addCup()}>
                    <Image
                      style={{
                        resizeMode: 'center',
                        width: 80,
                        height: 60,
                        marginBottom: 5,
                      }}
                      source={require('../public/can.png')}
                    />
                  </Pressable>
                  <Button title={`Add 12oz`} onPress={addCan} />
                </View>
                <View>
                  <Pressable onPress={() => addCup()}>
                    <Image
                      style={{
                        resizeMode: 'center',
                        width: 80,
                        height: 60,
                        marginBottom: 3,
                      }}
                      source={require('../public/water-bottle.png')}
                    />
                  </Pressable>
                  <Button title={`Add 16oz`} onPress={addBottle} />
                </View>
                <View style={styles.resetButton}>
                  <Button title={'Reset'} onPress={reset} color="#C33C54" />
                </View>
              </View>
            ) : (
              <View style={styles.waterButtons}>
                <Image
                  style={{ resizeMode: 'center', width: 80 }}
                  source={require('../public/water.png')}
                />
                <Image
                  style={{ resizeMode: 'center', width: 80 }}
                  source={require('../public/stayThirsty.jpg')}
                />
                <GoalModal reset={reset} />
              </View>
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

//WaterLevle
/* will grow vertically based on the water level */

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  headerView: {
    width: 10000,
    backgroundColor: 'skyblue',
    alignItems: 'center',
  },
  wholeScreen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#BFD7EA',
  },
  container: {
    flex: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#BFD7EA',
  },
  goal: {
    backgroundColor: '#BFD7EA',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  body: {
    flex: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  waterContainer: {
    flex: 2,
    height: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderWidth: 1,
    borderColor: '#91AEC1',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 15,
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
    backgroundColor: '#BFD7EA',
    alignItems: 'center',
    marginLeft: 15,
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
    justifyContent: 'space-evenly',
    borderRadius: 100,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#91AEC1',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  resetButton: {},
});

// remove/undo
// custom add/remove fl oz
// cup icon
