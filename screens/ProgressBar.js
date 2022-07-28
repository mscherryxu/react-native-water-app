import React from 'react';
import { Text, View, Animated } from 'react-native';

const ProgressBar = ({ step, steps, width }) => {
  const [height, setHeight] = React.useState(0);
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  React.useEffect(() => {
    // height + height * step / steps
    //when width is 0, -0 + ( 0 * 0 / 0 ) = 0
    //
    reactive.setValue(-height + (height * step) / steps);
  }, [step, height]);
  return (
    <>
      <Text>
        {step}/{steps}
      </Text>
      <View
        onLayout={(event) => {
          const newHeight = event.nativeEvent.layout.height;
          setHeight(newHeight);
        }}
        style={{
          width: 30,
          backgroundColor: 'powderblue',
          borderRadius: width,
          overflow: 'hidden',
        }}
      >
        <View
          style={{
            width: 30,
            backgroundColor: 'blue',
            position: 'absolute',
            left: 0,
            top: 0,
          }}
        />
      </View>
    </>
  );
};

export default ProgressBar;
