import React from "react";

import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
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
      ListFooterComponent={
        <ActivityIndicator size="large" style={styles.loading} />
      }
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  loading: {
    marginTop: 20,
    marginBottom: 60,
  },
});

export default PokemonList;
