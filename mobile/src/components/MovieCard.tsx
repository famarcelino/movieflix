import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { theme, text } from "../styles";


interface MovieProps {
    id: number,
    title: string,
    subTitle: string,
    year: number,
    imgUrl: string,
    synopsis: String,
    genre: GenreProps,
    reviews: ReviewProps,
};

interface GenreProps {
    id: number,
    name: string,
};

interface ReviewProps {
    id: number,
    text: string,
    userId: number,
    movieId: number,
    user: UserProps,
};

interface UserProps {
    id: number,
    name: string,
    email: string,
};

const MovieCard: React.FC<MovieProps> = ({ id, title, subTitle, year, imgUrl, synopsis, genre, reviews }) => {
    const navigation = useNavigation();
    return (
        <View style={theme.movieContainer}>
            <Image source={{ uri: imgUrl }} style={theme.movieImg} />
            <View style={theme.movieContent}>
                <Text style={text.movieTitle}>{title}</Text>
                <Text style={text.movieYear}>{year}</Text>
                <Text style={text.movieSubTitle}>{subTitle}</Text>
                <TouchableOpacity
                    style={theme.movieViewDetails}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("MovieDetail", { id })}
                >
                    <Text style={text.moveViewTextDetails}>Ver Detalhes</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MovieCard;