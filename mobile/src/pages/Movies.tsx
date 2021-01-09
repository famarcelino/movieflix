import React, { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import { MovieCard, SearchInput } from "../components";
import { getMovies } from "../services";
import { theme } from "../styles";


const Movies: React.FC = () => {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fillMovies() {
        setLoading(true);
        const res = getMovies();
        setLoading(false);
        setMovies((await res).data.content);
    }

    useEffect(() => {
        fillMovies();
    }, []);

    const data =
        search.length > 0
            ? movies.filter((movie) =>
                movie.title.toLowerCase().includes(search.toLowerCase())
            )
            : movies;

    return (
        <ScrollView contentContainerStyle={theme.scrollContainer}>
            <SearchInput
                placeholder="Gênero"
                search={search}
                setSearch={setSearch}
            />
            {
                loading ? (<ActivityIndicator size="large" />) :
                    (data.map((movie) => (
                        <MovieCard {...movie} key={movie.id} />
                    )))
            }
        </ScrollView>
    );
};

export default Movies;