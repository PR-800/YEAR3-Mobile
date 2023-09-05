import React, { useRef } from "react";
import {
  View,
  Button,
  StyleSheet,
  Image,
  Animated,
  Easing
} from "react-native";

const SequenceScreen = () => {
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const spinAnim = useRef(new Animated.Value(0)).current;

    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    const sequence = () => {
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1500,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
            }),
            Animated.timing(spinAnim, {
                toValue: 1,
                duration: 5000,
                easing: Easing.bounce,
                useNativeDriver: true,
            })
        ])
        .start( ()=> { 
            fadeAnim.setValue(1) 
            spinAnim.setValue(0)
        });
    };

    return (
        <View >
            <Animated.View style={[ styles.screen, styles.fadingContainer, {opacity: fadeAnim} ]}>
                <Animated.Image 
                    source={
                        require('../assets/IT_Logo.png')
                    }
                    style={{
                        width:180, height:150,
                        transform: [{ rotate: spin }]
                        
                    }}
                />
            </Animated.View>
            <View style={{marginTop: 309}}>
                <Button
                    title="RUN SEQUENCE"
                    onPress={sequence}
                />
            </View>
        </View>
    );
};
  
const styles = StyleSheet.create({
    screen: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 300,
    },
});
  
  export default SequenceScreen;