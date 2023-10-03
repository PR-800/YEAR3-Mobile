import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddScreen from "../Screens/AddScreen";
import ViewScreen from "../Screens/ViewScreen";
import UpdateScreen from "../Screens/UpdateScreen";

const NativeStack = createNativeStackNavigator();

export default function MyNavigator() {
    return (
        <NavigationContainer>
            <NativeStack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: "#2089dc" },
                    headerTintColor: "#00008b",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                }}
            >
                <NativeStack.Screen name="AddPage" component={AddScreen}
                    options={{
                        title: "Add Student",
                    }}
                />
                <NativeStack.Screen name="UpdatePage" component={UpdateScreen}
                    options={{
                        title: "Student Info",
                    }}
                />
                <NativeStack.Screen name="ViewPage" component={ViewScreen}
                    options={{
                        title: "Student List",
                    }}
                />
            </NativeStack.Navigator>
        </NavigationContainer>
    );
}
