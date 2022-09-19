import React from "react";

import {
  ActivityIndicator,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import PokemonCard from "./PokemonCard";

const PokemonList = (props) => {
  const { pokemons } = props;

  const [page, setPage] = React.useState(1);

  const loadMore = () => {
    setPage(page + 1);
    props.loadPokemons(page);
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={true}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.container}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.title}>Pokedex</Text>
        </View>
      }
      ListFooterComponent={
        <ActivityIndicator size="large" style={styles.loading} />
      }
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingVertical: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 10,
  },
  container: {
    paddingHorizontal: 10,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
  loading: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
});

export default PokemonList;
