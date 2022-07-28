import { StatusBar } from "expo-status-bar";
import { Animated, Text, View } from "react-native";

import React, { useEffect, useState, useRef } from "react";

export default function AltProgress({ step, steps, width }) {
  function percentDone (step, steps) {
    return Math.floor((step / steps) * 100)
  }
  
  return (
    <>
      <Text>
        {step}/{steps}
      </Text>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: "powderblue",
          overflow: "hidden",
        }}
      >
        <View
          style={{
            height: `${percentDone}%`,
            width: '100%',
            backgroundColor: "blue",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
      </View>
    </>
  );
}
