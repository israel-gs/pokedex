import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { capitalize } from "lodash";
import ProgressBar from "../../../components/ProgressBar";

const BaseStats = (props) => {
  const { pokemon } = props;
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        {pokemon.stats.map((stat, index) => (
          <View key={index} style={styles.info}>
            <Text style={styles.infoLabel}>{capitalize(stat.stat.name)}</Text>
            <Text style={styles.infoText}>{stat.base_stat}</Text>
            <View
              style={{
                flex: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ProgressBar progress={stat.base_stat} total={100} />
            </View>
          </View>
        ))}
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
    display: "flex",
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default BaseStats;
