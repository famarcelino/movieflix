import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
    baseURL: 'http://192.168.11.88:8080'
});

export const TOKEN = "Basic ZHNtb3ZpZWZsaXg6ZHNtb3ZpZWZsaXgxMjM=";

export async function userToken() {
    const token = await AsyncStorage.getItem("@token");
    return token;
};

// Backend requests

export async function getMovies() {
    const authToken = await userToken();
    const res = api.get(`/movies?direction=ASC&orderBy=title`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });
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
    const authToken = await userToken();
    const res = await api.get(`/movies/${id}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });
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