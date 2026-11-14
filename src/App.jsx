import { Text, View } from "react-native";
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
  
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onSelectMovie={setSelectedMovie} />
      ) : (
        <MovieList movies={data.movies} onSelect={selectedMovieHandler} />
      )}

    </View>
  );
}
