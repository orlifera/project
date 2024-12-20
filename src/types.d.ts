export interface Note {
    id: string;
    title: string;
    content: string;
    date: string;
    // comment?: string;
}

export interface WishType {
    id: number;
    title: string;
    description?: string;
    isCompleted?: boolean;
}


export interface Movie {
    title: string;
    poster_path: string;
    release_date: string;
    overview: string;
    credits?: {
        cast?: {
            id: number;
            name: string;
        }[];
    };
    id: number;
}

export interface ImageData {
    src: string;
    alt?: string;
}