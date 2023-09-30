import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({navigation}) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate("CategoryMeals", {
            prev: "CategoriesScreen",
            id: itemData.item.id,
            title: itemData.item.title,
          });
        }}
      />
    );
  };

  return (
    <FlatList 
      data={CATEGORIES} 
      renderItem={renderGridItem} 
      numColumns={2} 
    />
  );
};

export default CategoriesScreen;
