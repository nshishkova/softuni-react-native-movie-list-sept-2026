import { Text, View, StatusBar } from "react-native";
import { useState } from "react";
import data from "../data.json";
import { colors } from "./theme";

import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const selectedMovieHandler = (movie) => {
    setSelectedMovie(movie);
  };

  const backHandler = () => {
    setSelectedMovie(null);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
    <StatusBar barStyle="light-content" />
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onBack={backHandler} />
      ) : (
        <MovieList movies={data.movies} onSelect={selectedMovieHandler} />
      )}

    </View>
  );
}
