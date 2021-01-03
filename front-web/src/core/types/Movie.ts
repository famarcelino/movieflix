export type MoviesResponse = {
    content: Movie[];
    size: number;
}

export type Movie = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    synopsis: string;
    genre: Genre[];
}

export type Genre = {
    id: number;
    name: string;
}