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
    place: {
        lat: number;
        lng: number;
    };
}
