import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View, Image } from "react-native";

const move = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(1)).current;
  
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      [ null, { dx: pan.x, dy: pan.y }],
      { useNativeDriver: false }
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: (evt, gestureState) => {
      const touches = evt.nativeEvent.touches;
      if (touches.length >= 2) {
        Animated.spring(scale, {
          toValue: 3,
          friction: 3,
          useNativeDriver: false,
        }).start();
      }
      if (touches.length == 1) {
        pan.setValue({
          x: gestureState.dx, y: gestureState.dy
        }) ,
        { useNativeDriver: false }
      }  
    },
    onPanResponderRelease: () => {
      pan.flattenOffset();
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        {...panResponder.panHandlers}
        source={
            require('./assets/IT_Logo.png')
        }
        style={[pan.getLayout(), { 
            width:71, height:59, 
            transform: [{ scale: scale }],
        }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default move;