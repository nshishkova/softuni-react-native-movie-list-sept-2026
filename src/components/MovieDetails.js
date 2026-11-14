import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme';
import { formatDuration } from '../utils/dateTimeUtils';
import GenreTags from './GenreTag';
import MovieDetailsRow from './MovieDetailsRow';

export default function MovieDetails({
movie
}) {
    return (
        <ScrollView contentContainerStyle={styles.content}>
            <Image source={{ uri: movie.posterUrl }} style={styles.poster} />
            
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.meta}>{movie.year} • {formatDuration(movie.durationMinutes)} мин</Text>
            
            <View style= {styles.genres}>
            <GenreTags
                genre={movie.genre}
            />
            </View>

            
            <View style={styles.infoBox}>
                <MovieDetailsRow
                    label="Режисьор"
                    value={movie.director}
                />
                <MovieDetailsRow
                    label="Година"
                    value={movie.year}
                />
                <MovieDetailsRow
                    label="Времетраене"
                    value={formatDuration(movie.durationMinutes)}
                />
                <MovieDetailsRow
                    label="Жанр"
                    value={movie.genre}
                />
            </View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 56,
        paddingHorizontal: 20,
        paddingBottom: 40,
        alignItems: 'center',
    },
    topBar: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    backButton: {
        backgroundColor: colors.card,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
    backText: {
        color: colors.text,
        fontSize: 15,
    },
    poster: {
        width: 220,
        height: 330,
        borderRadius: 16,
        marginBottom: 24,
    },
    title: {
        color: colors.text,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    meta: {
        color: colors.accent,
        fontSize: 15,
        marginTop: 8,
    },
    genres: {
        marginTop: 16,
        marginBottom: 28,
    },
    infoBox: {
        alignSelf: 'stretch',
        backgroundColor: colors.card,
        borderRadius: 16,
        paddingHorizontal: 16,
    }
});