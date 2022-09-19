import React from "react";

import { Animated, StyleSheet, Text, View } from "react-native";
import { capitalize } from "lodash";
import { getColorFromPokemonType } from "../../../utils/colors";

const Max_Header_Height = 350;
const Min_Header_Height = 70;
const Scroll_Distance = Max_Header_Height - Min_Header_Height;

const MAX_IMAGE_SIZE = 200;
const MIN_IMAGE_SIZE = 50;

const Header = (props) => {
  const { pokemon, animHeaderValue } = props;

  const animatedHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Max_Header_Height, Min_Header_Height],
    extrapolate: "clamp",
  });

  const animatedOpacity = animHeaderValue.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const animatedImageSize = animHeaderValue.interpolate({
    inputRange: [0, MAX_IMAGE_SIZE],
    outputRange: [MAX_IMAGE_SIZE, MIN_IMAGE_SIZE],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={{
        ...styles.headerContainer,
        backgroundColor: getColorFromPokemonType(pokemon?.types[0].type.name),
        height: animatedHeaderHeight,
      }}
    >
      <View style={styles.dataContainer}>
        <View>
          <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
          <Animated.View
            style={{ ...styles.typesContainer, opacity: animatedOpacity }}
          >
            {pokemon.types.map((type) => (
              <View key={type.type.name} style={styles.typeContainer}>
                <Text style={styles.type}>{capitalize(type.type.name)}</Text>
              </View>
            ))}
          </Animated.View>
        </View>
        <View>
          <Text style={styles.id}>
            #{pokemon.id.toString().padStart(3, "0")}
          </Text>
        </View>
      </View>
      <Animated.Image
        style={{
          ...styles.image,
          opacity: animatedOpacity,
          width: animatedImageSize,
          height: animatedImageSize,
        }}
        loadingIndicatorSource={require("../../../../assets/navigation/pokeball.png")}
        source={{
          uri: pokemon.sprites.other["official-artwork"].front_default,
        }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    paddingTop: 100,
    paddingBottom: 0,
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  id: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  typesContainer: {
    flexDirection: "row",
  },
  typeContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 100,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 5,
  },
  type: {
    fontSize: 16,
    color: "white",
  },
  image: {
    alignSelf: "center",
    position: "absolute",
    bottom: -50,
  },
});

export default Header;
