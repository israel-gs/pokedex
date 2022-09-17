import React from "react";

import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { getColorFromPokemonType } from "../utils/colors";
import { capitalize } from "lodash";

const PokemonCard = (props) => {
  const { pokemon } = props;

  const bgStyle = {
    backgroundColor: getColorFromPokemonType(pokemon.type),
  };

  const goToPokemon = () => {
    console.log("Go to pokemon ", pokemon.name);
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.container}>
          <View style={{ ...styles.bg, ...bgStyle }}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, "0")}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image style={styles.image} source={{ uri: pokemon.image }} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 150,
  },
  container: {
    flex: 1,
    padding: 5,
  },
  bg: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    top: 10,
    right: 10,
    color: "white",
    fontSize: 11,
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
  },
  image: {
    resizeMode: "contain",
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});

export default PokemonCard;
