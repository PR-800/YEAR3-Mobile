import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/mealsAction";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import CustomHeaderButton from "../components/CustomHeaderButton";

const BottomTab = createBottomTabNavigator();
const TabNavigator = createNativeStackNavigator();
const MainNavigator = createDrawerNavigator();

function MyMealPages() {
  const dispatch = useDispatch() 
  
  const toggleFavoriteHandler = (mealId) => {
    dispatch(toggleFavorite(mealId));
  };

  return (
    <TabNavigator.Navigator 
      initialRouteName="Categories" 
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white"
      }}
      >
      <TabNavigator.Screen name="Categories" component={CategoriesScreen}
        options={{
          title: "Meal Categories",
        }}
      />
      <TabNavigator.Screen name="CategoryMeals" component={CategoryMealsScreen}
        options={
          ({ route }) => ({
            title: route.params.title,
          })
        }
      />
      <TabNavigator.Screen name="MealDetail" component={MealDetailScreen}
        options={
          ({ route }) => ({
            title: route.params.title,
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Star" iconName="ios-star" 
                  onPress={() => {
                    toggleFavoriteHandler(route.params.id)
                  }} />
              </HeaderButtons> 
            ), 
          })
        }
      />
    </TabNavigator.Navigator>
  );
}

function MyTotalPages() {

  const dispatch = useDispatch() 
  
  const toggleFavoriteHandler = (mealId) => {
    dispatch(toggleFavorite(mealId));
  };

  return (
    <TabNavigator.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white"
      }}
    >
      <TabNavigator.Screen name="Favorites" component={FavoritesScreen}/>
      <TabNavigator.Screen name="MealDetail" component={MealDetailScreen}
        options={
          ({ route }) => ({
            title: route.params.title,
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Star" iconName="ios-star" 
                  onPress={() => {
                    toggleFavoriteHandler(route.params.id)
                  }} />
              </HeaderButtons> 
            ), 
          })
        }
      />
    </TabNavigator.Navigator>
  );
}

function MyBottomTab() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Meals" component={MyMealPages}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="ios-restaurant" size={size} color={color} />;
        },
      }} 
      />
      <BottomTab.Screen name="Favourite" component={MyTotalPages}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          return <AntDesign name="star" size={24} color={color} />;
        },
      }} 
      />
    </BottomTab.Navigator>
  );
}

function MyFilterPage() {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen name="Filters" component={FiltersScreen}
        options={{
          headerShown: false
        }} 
      />
    </TabNavigator.Navigator>
  );
}

export default function MyNavigator() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator>
        <MainNavigator.Screen name="MealsFav" component={MyBottomTab}
          options={{
            headerShown: false
          }} 
        />
        <MainNavigator.Screen name="Filters" component={MyFilterPage}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}
