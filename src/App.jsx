import { Text, View, StatusBar } from "react-native";
import { useState } from "react";
import { colors } from "./theme";
import { MovieProvider } from "./contexts/MovieContext";

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
    <MovieProvider>
    <View style={{ flex: 1, backgroundColor: colors.background }}>
    <StatusBar barStyle="light-content" />
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onBack={backHandler} />
      ) : (
        <MovieList onSelect={selectedMovieHandler} />
      )}

    </View>
    </MovieProvider>
  );
}
