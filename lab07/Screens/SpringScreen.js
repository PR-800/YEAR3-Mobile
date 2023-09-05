import React, { useRef } from "react";
import {
  View,
  Button,
  StyleSheet,
  Image,
  Animated
} from "react-native";

const SpringScreen = () => {
    const springVal = useRef(new Animated.Value(1)).current

    const spring = () => {
        Animated.spring(springVal, {
            toValue: 2,
            friction: 1,
            useNativeDriver: true
        })
        .start( ()=> { 
            springVal.setValue(1); 
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
            </View>
            <View style={{marginTop: 350}}>
                <Button
                    title="SPRING"
                    onPress={spring}
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
  
export default SpringScreen;