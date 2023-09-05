import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'; 

import SpringScreen from "../Screens/SpringScreen";
import SequenceScreen from "../Screens/SequenceScreen";
import ParallelScreen from "../Screens/ParallelScreen";

const PageSpringNavigator = createNativeStackNavigator();
const PageSequenceNavigator = createNativeStackNavigator();
const PageParallelNavigator = createNativeStackNavigator();
const BottomNavigator = createBottomTabNavigator();
const MainNavigator = createNativeStackNavigator();

function MySpringNavigator() {
    return (
        <PageSpringNavigator.Navigator>
            <PageSpringNavigator.Screen name="Spring" component={SpringScreen}
                options={{
                    headerShown: false,
                }} 
            />
            <PageSpringNavigator.Screen name="Sequence" component={SequenceScreen}/>
            <PageSpringNavigator.Screen name="Parallel" component={ParallelScreen}/>
        </PageSpringNavigator.Navigator>
    );
}

function MySequenceNavigator() {
    return (
        <PageSequenceNavigator.Navigator>
            <PageSequenceNavigator.Screen name="Sequence" component={SequenceScreen}
                options={{
                    headerShown: false,
                }}
            />
            <PageSequenceNavigator.Screen name="Spring" component={SpringScreen}/>
            <PageSequenceNavigator.Screen name="Parallel" component={ParallelScreen}/>
        </PageSequenceNavigator.Navigator>
    );
}

function MyParallelNavigator() {
    return (
        <PageParallelNavigator.Navigator>
            <PageParallelNavigator.Screen name="Parallel" component={ParallelScreen}
                options={{
                    headerShown: false,
                }}
            />
            <PageParallelNavigator.Screen name="Spring" component={SpringScreen}/>
            <PageParallelNavigator.Screen name="Sequence" component={SequenceScreen}/>
        </PageParallelNavigator.Navigator>
    );
}

function MyBottomNavigator() {
    return (
        <BottomNavigator.Navigator>
            <BottomNavigator.Screen name="SpringTab" component={MySpringNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                    return <Ionicons name="expand" size={24} color={color} />;
                    },
                }} 
            />
            <BottomNavigator.Screen name="SequenceTab" component={MySequenceNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                    return <Ionicons name="layers" size={24} color={color} />;
                    },
                }} 
            />
            <BottomNavigator.Screen name="ParallelTab" component={MyParallelNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                    return <Ionicons name="infinite" size={24} color={color} />;
                    },
                }} 
            />
        </BottomNavigator.Navigator>
    );
}

export default function MyNavigator() {
    return (
      <NavigationContainer>
        <MainNavigator.Navigator>
          <MainNavigator.Screen name="BottomTab" component={MyBottomNavigator}
            options={{
              headerShown: false
            }} 
          />
        </MainNavigator.Navigator>
      </NavigationContainer>
    // <View>
    //     <Text>Test</Text>
    // </View>
    );
}