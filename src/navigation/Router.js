import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Details from "../screens/Details";
import LastPage from "../screens/LastPage";

const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        title: "Popular",
        headerStyle: {
          backgroundColor: "red",
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen
        name="LastPage"
        component={LastPage}
        options={{
          headerShown: true,
          title: "Popular",
          headerStyle: {
            backgroundColor: "blue",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
