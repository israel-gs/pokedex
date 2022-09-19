import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/Pokemon/Pokemon";
import Icon from "react-native-vector-icons/FontAwesome5";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <Icon name="chevron-left" style={styles.backButtonIcon} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  backButtonIcon: {
    color: "#fff",
    paddingLeft: 10,
    fontSize: 20,
  },
});

export default PokedexNavigation;
