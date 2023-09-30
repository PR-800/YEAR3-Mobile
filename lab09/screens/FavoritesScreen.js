import React from "react";

import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const FavoritesScreen = (props) => {

  const availableMeals = useSelector(state => state.meals.filteredMeals)
  const favouriteMeals = useSelector(state => state.meals.favouriteMeals)

  // console.log("favArray : ", favouriteMeals);
  
  const favMeals = availableMeals.filter((meal) => favouriteMeals.includes(meal.id));

  return (
    <MealList 
      listData={favMeals}
      navigation={props.navigation}
    />
  );
};


export default FavoritesScreen;
