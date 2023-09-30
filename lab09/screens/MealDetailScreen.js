import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground, ScrollView } from "react-native";

const MealDetailScreen = ({ route, navigation }) => {
  return (
    <View>
      <ScrollView>

        <View style={styles.mealItem}>
            <View>
              <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                <ImageBackground
                  source={{ uri: route.params.image }}
                  style={styles.bgImage}
                />
              </View>
              <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                <Text>{route.params.duration}m</Text>
                <Text>{route.params.complexity.toUpperCase()}</Text>
                <Text>{route.params.affordability.toUpperCase()}</Text>
              </View>
            </View>
        </View>
        
        <Text style={styles.title}>Ingredients</Text>
        {route.params.ingredients.map((ingredient, index) => ( //เอาออกมาทีละอัน (เป็นบรรทัด)
          <Text key={index} style={styles.list}>
            {ingredient}
          </Text>
        ))}

        <Text style={styles.title}>Steps</Text>
        {route.params.steps.map((step, index) => (
          <Text key={index} style={styles.list}>
            {index+1}{")"} {step} 
          </Text>
        ))}

        <View style={styles.button}>
          <Button
            title="Go Back to Categories"
            onPress={() => {
              navigation.navigate("Categories", {
                prev: "MealDetail",
              });
            }}
          />
        </View>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 250,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
  },
  list: {
    lineHeight: 30,
    paddingLeft: 20,
  },
  button: {
    margin: 50,
  },
});

export default MealDetailScreen;
