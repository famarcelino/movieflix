import React from "react";
import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import { theme, text } from "../styles";


interface MovieProps {
    id: number,
    title: string,
    subTitle: string,
    year: number,
    imgUrl: ImageSourcePropType,
    synopsis: String,
    genre: Object,
};

const MovieCard: React.FC<MovieProps> = ({ id, title, subTitle, year, imgUrl, synopsis, genre }) => {
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
                >
                    <Text style={text.moveViewTextDetails}>Ver Detalhes</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MovieCard;