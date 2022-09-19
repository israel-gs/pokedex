import React, { useEffect, useRef, useState } from "react";

import { Animated, ScrollView, StyleSheet, View } from "react-native";
import { getPokemon } from "../../api/pokemon";
import Header from "./components/Header";
import About from "./components/About";
import Tabs from "../../components/Tabs";
import { getColorFromPokemonType } from "../../utils/colors";
import BaseStats from "./components/BaseStats";

// const Tab = createMaterialTopTabNavigator();

const tabs = ["About", "Base Stats"];

const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  const {
    navigation,
    route: { params },
  } = props;

  useEffect(() => {
    (async () => {
      await loadPokemon();
    })();
  }, []);

  const loadPokemon = async () => {
    try {
      const pokemonData = await getPokemon(params.name);
      console.log(pokemonData);
      setPokemon(pokemonData);
    } catch (error) {
      navigation.goBack();
    }
  };

  return (
    pokemon && (
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
        scrollIndicatorInsets={{ right: 1 }}
        persistentScrollbar={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        stickyHeaderIndices={[0]}
        style={{
          backgroundColor: getColorFromPokemonType(pokemon?.types[0].type.name),
        }}
      >
        <Header animHeaderValue={scrollOffsetY} pokemon={pokemon}></Header>

        <View style={styles.container}>
          <View style={{ flex: 1 }}></View>
          <View style={styles.detailContainer}>
            <View>
              <Tabs
                tabs={["About", "Base Stats", "Evolution", "Moves"]}
                activeTab={selectedTab}
                setActiveTab={setSelectedTab}
              ></Tabs>
              {(() => {
                switch (selectedTab) {
                  case 0:
                    return (
                      <>
                        <About pokemon={pokemon} />
                      </>
                    );
                  case 1:
                    return <BaseStats pokemon={pokemon} />;
                  case 2:
                    return <View></View>;
                  case 3:
                    return <View></View>;
                }
              })()}
            </View>
          </View>
        </View>
      </ScrollView>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  detailContainer: {
    display: "flex",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    minHeight: "100%",
  },
});

export default Pokemon;
