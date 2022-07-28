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
    reactive.setValue(height + (height * step) / steps);
  }, [step, height]);
  return (
    <>
      <Text>
        {step}/{steps}
      </Text>
      <View
        onLayout={(e) => {
          const newHeight = e.nativeEvent.layout.height;
          setHeight(newHeight);
        }}
        style={{
          width,
          backgroundColor: 'powderblue',
          borderRadius: width,
          overflow: 'hidden',
        }}
      >
        <Animated.View
          style={{
            width,
            height: '100%',
            borderRadius: width,
            backgroundColor: 'skyblue',
            position: 'absolute',
            left: 0,
            top: 0,
            transform: [
              {
                translateY: animatedValue,
              },
            ],
          }}
        />
      </View>
    </>
  );
};

export default ProgressBar;
