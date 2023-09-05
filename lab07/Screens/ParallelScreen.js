import React, { useRef } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Animated,
  Easing,
} from "react-native";

const ParallelScreen = () => {
    const springVal = useRef(new Animated.Value(1)).current
    const slideVal = useRef(new Animated.Value(0)).current

    const slide = slideVal.interpolate({
        inputRange: [0, 0.3, 0.6, 1],
        outputRange: [0, -100, 100, 0],
    });

    const parallel = () => {
        Animated.parallel([
            Animated.spring(springVal, {
                toValue: 2,
                friction: 1,
                useNativeDriver: true
            }),
            Animated.timing(slideVal, {
                toValue: 1,
                duration: 5000,
                easing: Easing.bounce,
                useNativeDriver: true,
            })
        ])
        .start( ()=> { 
            springVal.setValue(1); 
            slideVal.setValue(0)
        }); 
    };

    return (
        <View >
            <View style={styles.screen}>
                <Animated.Image 
                    source={
                        require('../assets/IT_Logo.png')
                    }
                    style={{
                        width:71, height:59,
                        transform: [{scale: springVal}]
                    }}
                />
                <Text style={{fontSize: 40}}></Text>
                <Animated.Text style={{
                        fontSize: 20, color:"orange", fontWeight: "bold",
                        transform: [{translateX: slide}]
                    }}>
                    Welcome to Faculty of IT !!
                </Animated.Text>
        
            </View>
            <View style={{marginTop: 270.5}}>
                <Button
                    title="RUN PARALLEL"
                    onPress={parallel}
                />
            </View>
        </View>
    );
};
  
const styles = StyleSheet.create({
    screen: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 350,
    },
});
  
  export default ParallelScreen;