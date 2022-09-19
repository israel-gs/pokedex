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
import { useNavigation } from "@react-navigation/native";

const PokemonCard = (props) => {
  const { pokemon } = props;

  const navigation = useNavigation();

  const bgStyle = {
    backgroundColor: getColorFromPokemonType(pokemon.types[0]),
  };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { name: pokemon.name });
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={{ ...styles.card, ...bgStyle }}>
        <Text style={styles.number}>
          #{`${pokemon.order}`.padStart(3, "0")}
        </Text>
        <View style={styles.container}>
          <View style={styles.dataContainer}>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <View style={styles.types}>
              {pokemon.types.map((type) => (
                <View key={type} style={styles.typeContainer}>
                  <Text style={styles.typeText}>{capitalize(type)}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.imageContainer}>
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
    margin: 5,
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
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dataContainer: {
    display: "flex",
    justifyContent: "center",
  },
  typeContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 40,
    padding: 5,
    margin: 2,
  },
  name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  typeText: {
    textAlign: "center",
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  image: {
    resizeMode: "contain",
    width: 70,
    height: 70,
  },
});

export default PokemonCard;
