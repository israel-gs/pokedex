import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { capitalize } from "lodash";

const About = (props) => {
  const { pokemon } = props;
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.infoLabel}>Height</Text>
          <Text style={styles.infoText}>{pokemon.height}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoLabel}>Weight</Text>
          <Text style={styles.infoText}>{pokemon.weight}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoLabel}>Abilities</Text>
          <Text style={styles.infoText}>
            {pokemon.abilities.map((ability) => {
              return capitalize(ability.ability.name) + ", ";
            })}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
  },
  infoContainer: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    paddingTop: 20,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  infoLabel: {
    flex: 1,
    color: "#7c7c7c",
    fontSize: 20,
  },
  infoText: {
    flex: 2,
    fontSize: 20,
  },
});

export default About;
