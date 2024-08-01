export interface Post {
    id: number;
    title: string;
    location: string;
    participants: string;
    date: string;
    time: string;
    views: number;
    description: string;
    content: string;
    // imgSrc: string;
    imageFile: string | File;

    lat: number;
    lng: number;
}

export let EmptyPost : Post = {
    id: 0,
    title: '',
    location: '',
    participants: '',
    date: '',
    time: '',
    views: 0,
    description: '',
    content: '',
    // imgSrc: '',
    imageFile: '',
    lat: 0,
    lng: 0
}

export interface getPost {
    id: number;
    title: string;
    location: string;
    participants: string;
    date: string;
    time: string;
    views: number;
    description: string;
    content: string;
    imagePath: string;
    lat: number;
    lng: number;
    downloadUrl: string
}

export let EmptygetPost : getPost = {
    id: 0,
    title: '',
    location: '',
    participants: '',
    date: '',
    time: '',
    views: 0,
    description: '',
    content: '',
    imagePath: '',
    lat: 0,
    lng: 0,
    downloadUrl: ''
}

