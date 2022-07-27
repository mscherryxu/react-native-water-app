import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    ActivityIndicator,
  } from "react-native";

return (
    <View style={styles.wholeScreen}>
        <View style={styles.container}>
            <View style={styles.goal}>
            </View>
            <View style={styles.body}>
                <View style={styles.waterContainer}>
                    <WaterHolder waterLevel={waterLevel}>
                        <WaterLevel style={styles.waterLevel}></WaterLevel>
                    </WaterHolder>
                    <WaterLabel style={styles.waterLabel}></WaterLabel>
                </View>
                <View style={styles.waterButtons}>
                    <Button1 />
                    <Button2 />
                    <Button3 />
                </View>
            </View>
        </View>
        <View style={styles.resetButton}>
            <ResetButton />
        </View>
    </View>
)

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
    }
});
