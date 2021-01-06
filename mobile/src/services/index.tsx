import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
    baseURL: 'http://192.168.11.74:8080'
});

export const TOKEN = "Basic ZHNtb3ZpZWZsaXg6ZHNtb3ZpZWZsaXgxMjM=";

export async function userToken() {
    const token = await AsyncStorage.getItem("@token");
    return token;
};

// Backend requests

export function getMovies() {
    const res = api.get(`/movies?direction=ASC&orderBy=title`);
    return res;
};

export async function createReview(data: object) {
    const authToken = await userToken();
    const res = api.post(`/reviews`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });
    return res;
};

export async function getMovie(id: number) {
    const res = await api.get(`/products/${id}`);
    return res;
};

export function getGenres() {
    const res = api.get(`/genres?direction=ASC&orderBy=name`);
    return res;
};

// Image Upload
/*
export async function uploadImage(image: string) {
    if (!image) return;
    const authToken = await userToken();
    let data = new FormData();
    data.append("file", {
        uri: image,
        name: image,
    });

    const res = await api.post(`/movies/image`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "multipart/form-data",
        },
    });

    return res;
};
*/