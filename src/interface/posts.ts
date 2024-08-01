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
    imageFile: string;

    lat: number;
    lng: number;
}

// interface imagedata {
//     []: string
// }

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
