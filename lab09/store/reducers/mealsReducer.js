import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/mealsAction";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE : //ตามในไฟล์ action

            const updatedFavouriteMeals = [...state.favouriteMeals]; // ... => copy state.filteredMeals มาอีกอัน
    
            const index = updatedFavouriteMeals.findIndex(
                (mealId) => mealId === action.mealId
            );
    
            if (index >= 0) {
                updatedFavouriteMeals.splice(index, 1);
                // console.log("found")
            } else {
                updatedFavouriteMeals.push(action.mealId);
                // console.log("push : ", updatedFavouriteMeals)
            }
    
            return {
                ...state,
                favouriteMeals: updatedFavouriteMeals, // เอาค่าใหม่ไปแทนที่
            };

        default:
            return state;
    } 
};

export default mealsReducer;