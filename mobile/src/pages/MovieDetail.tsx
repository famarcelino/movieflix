import React, { useState, useEffect } from "react";
import { Text, View, ActivityIndicator, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import { text, theme } from "../styles";
import { getMovie } from "../services";

const MovieDetail = ({
    route: {
        params: { id },
    },
}) => {
    const [movie, setMovie] = useState({
        id: null,
        title: null,
        subTitle: null,
        year: null,
        imgUrl: ' ',
        synopsis: null,
        genre: [],
        reviews: [],
    });

    const [loading, setLoading] = useState(false);

    async function loadMovieData() {
        setLoading(true);
        const res = await getMovie(id);
        setMovie(res.data);
        setLoading(false);
    }

    useEffect(() => {
        loadMovieData();
    }, []);

    return (
        <ScrollView style={theme.containerMovieDetail}>
            { loading ?
                (
                    <ActivityIndicator size="large" />
                )
                :
                (
                    <View>
                        <View style={theme.contentMovieDetail}>
                            <Text style={text.movieDetailTitle}>{movie.title}</Text>
                            <Image source={{ uri: movie.imgUrl }} style={theme.movieImg} />
                            <Text style={text.movieDetailYear}>{movie.year}</Text>
                            <Text style={text.movieDetailSubtitle}>{movie.subTitle}</Text>
                            <Text style={text.movieDetailSinopseTitle}>Sinopse</Text>
                            <ScrollView style={theme.movieDetailSinopseContent}>
                                <Text style={text.movieDetailSinopseText}>{movie.synopsis}</Text>
                            </ScrollView>
                        </View>
                        <View style={theme.movieDetailInputContainer}>
                            <TextInput
                                style={theme.movieDetailInput}
                            />
                            <TouchableOpacity>
                                <Text>salvar avaliação</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }

        </ScrollView>
    );
};

export default MovieDetail;