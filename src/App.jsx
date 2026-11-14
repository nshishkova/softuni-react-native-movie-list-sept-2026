import { Text, View } from 'react-native';
import data from '../data.json';
import { colors } from './theme';

import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
    {/*<MovieList movies={data.movies} />*/}

    <MovieDetails movie = {data.movies[0]} />
    </View>
  );
}