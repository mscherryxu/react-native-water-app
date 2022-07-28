import {
  Text,
  StyleSheet,
  View,
  Animated,
  Dimensions,
  ProgressBarAndroid,
  Button,
} from "react-native";
import waterReducer, {
  updateConsumption,
  resetGoal,
  setGoal,
} from "../src/store/waterReducer";
import React, { useState, useMemo } from "react";
import ProgressBar from "./ProgressBar";
import AltProgress from "./AltProgress";
import { RootTagContext } from "react-native/Libraries/ReactNative/RootTag";

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
        <Text styles={{ textAlign: "center" }}>
          {currentWater}/{waterGoal}
        </Text>
        <View style={styles.body}>
          <View style={styles.waterContainer}>
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                borderWidth: 1,
                alignItems: "center",
              }}
            >
              <Text >{waterGoal}</Text>
              <Text >{waterGoal * 0.75}</Text>
              <Text >{waterGoal * 0.5}</Text>
              <Text >{waterGoal * 0.25}</Text>
              <Text >0</Text>
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: "row",
                borderWidth: 1,
                alignContent: "center",
              }}
            >
              <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={currentWater / waterGoal}
                style={{
                  transform: [
                    { rotate: "270deg" },
                    { scaleY: 4 },
                    { scaleY: -4 },
                    { scaleX: 4.3 },
                  ],
                  flexBasis: "100%",
                  color: "steelblue",
                }}
              />
            </View>
          </View>
          <View style={styles.waterButtonHolder}>
            {goalMet ? (
              <View style={styles.waterButtons}>
                <Button title={`Add Cup (8oz / 240mL)`} onPress={addCup} />
                <Button title={`Add Can (12oz / 360mL)`} onPress={addCan} />
                <Button
                  title={`Add Bottle (16oz / 480mL)`}
                  onPress={addBottle}
                />
              </View>
            ) : (
              <Text
                style={{
                  color: "red",
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Congrats, you did it!
              </Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.resetButton}>
          <Button title={"Reset"} onPress={reset} />
        </View>
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
    backgroundColor: "#fff",
    alignItems: "center",
  },
  container: {
    flex: 20,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "space-between",
  },
  goal: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 30,
    flexDirection: "row",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "space-between",
  },
  waterContainer: {
    flex: 2,
    height: "100%",
    backgroundColor: "white",
    borderWidth: 5,
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  waterScale: {
    flex: 1,
    height: "100%",
    backgroundColor: "white",
    borderWidth: 5,
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  waterButtonHolder: {
    flex: 1,
    height: "100%",
    backgroundColor: "lightgrey",
    borderColor: "grey",
    borderWidth: 5,
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
    flexDirection: "column",
    alignContent: "center",
    backgroundColor: "lightblue",
    justifyContent: "center",
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
    flexDirection: "column",
    borderWidth: 5,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "column",
  },
  resetButton: {
    backgroundColor: "#000",
    justifyContent: "flex-end",
    padding: 2,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
