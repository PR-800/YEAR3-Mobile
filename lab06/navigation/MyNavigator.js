import React from "react";

// import library ที่จำเป็น
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { createDrawerNavigator } from "@react-navigation/drawer";

// import screen ที่เกี่ยวข้อง
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

// สร้าง navigator ตามโจทย์กำหนด
const MealsFavTabNavigator = createBottomTabNavigator();
const MealsNavigator = createNativeStackNavigator();
const FavNavigator = createNativeStackNavigator();
const FiltersNavigator = createNativeStackNavigator();
const MainNavigator = createDrawerNavigator();

// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น
function TabMealNavigator() {
  return (
    // กำหนดรายละเอียดของ navigator
    <MealsNavigator.Navigator 
      initialRouteName="Categories" 
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white"
      }}
      >
      <MealsNavigator.Screen name="Categories" component={CategoriesScreen}
        options={{
          title: "Meal Categories",
        }}
      />
      <MealsNavigator.Screen name="CategoryMeals" component={CategoryMealsScreen}
        options={
          ({ route }) => ({
            title: route.params.title,
          })
        }
      />
      <MealsNavigator.Screen name="MealDetail" component={MealDetailScreen}
        options={
          ({ route }) => ({
            title: route.params.title,
          })
        }
      />
    </MealsNavigator.Navigator>
  );
}

// อาจกำหนด Navigator เพิ่มได้
function TabFavNavigator() {
  return (
    // กำหนดรายละเอียดของ navigator
    <FavNavigator.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white"
      }}
    >
      <FavNavigator.Screen name="Favorites" component={FavoritesScreen}/>
      <FavNavigator.Screen name="MealDetail" component={MealDetailScreen}/>
    </FavNavigator.Navigator>
  );
}

function MyMealDrawer() {
  return (
    <MealsFavTabNavigator.Navigator>
      <MealsFavTabNavigator.Screen name="Meals" component={TabMealNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="ios-restaurant" size={size} color={color} />;
        },
      }} 
      />
      <MealsFavTabNavigator.Screen name="Favourite" component={TabFavNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          return <AntDesign name="star" size={24} color={color} />;
        },
      }} 
      />
    </MealsFavTabNavigator.Navigator>
  );
}

function MyFiltersDrawer() {
  return (
    <FiltersNavigator.Navigator>
      <FiltersNavigator.Screen name="Filters" component={FiltersScreen}
        options={{
          headerShown: false
        }} 
      />
    </FiltersNavigator.Navigator>
  );
}

// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    /* รายละเอียดของ Navigator หลัก (MainNavigator) */
    <NavigationContainer>
      <MainNavigator.Navigator>
        <MainNavigator.Screen name="MealsFav" component={MyMealDrawer}
          // options={{
          //   headerShown: false
          // }} 
        />
        <MainNavigator.Screen name="Filters" component={MyFiltersDrawer}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}
