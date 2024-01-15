export const popularReviews = [
    {
        movie: {
            name: 'Not Okay',
            type: 'movie',
            img: new URL('/assets/movie_posters/mv3.png', import.meta.url).href,
            releaseYear: 2022,
        },
        reviewer: {
            name: 'HORROR_FREAK',
            profileImg: new URL(
                '/assets/user_profiles/pfp4.png',
                import.meta.url
            ).href,
            dateTime: '2022-04-18 11:30am',
            rating: 2,
            likes: 1000,
            comments: 16,
            review: "Love Dylan O'Brien's performance as Peter or David in this movie...",
        },
    },
    {
        movie: {
            name: 'Toy Story',
            type: 'movie',
            img: new URL('/assets/movie_posters/mv2.png', import.meta.url).href,
            releaseYear: 2012,
        },
        reviewer: {
            name: 'Bryan Fernedes',
            profileImg: new URL(
                '/assets/user_profiles/pfp3.jpeg',
                import.meta.url
            ).href,
            dateTime: '2022-04-18 11:30am',
            rating: 3,
            likes: 3000,
            comments: 86,
            review: 'Light year buzz is such a stupid movie that comparison with...',
        },
    },
    {
        movie: {
            name: 'Delhi Crime Season 1',
            type: 'movie',
            img: new URL('/assets/movie_posters/mv1.png', import.meta.url).href,
            releaseYear: 2020,
        },
        reviewer: {
            name: 'Clemmine',
            profileImg: new URL(
                '/assets/user_profiles/pfp2.jpeg',
                import.meta.url
            ).href,
            dateTime: '2022-05-06 1:30pm',
            rating: 3,
            likes: 305,
            comments: 12,
            review: 'Never have i ever seen such a brutal incident in my wntire life...',
        },
    },
    {
        movie: {
            name: 'Call me by your name',
            type: 'movie',
            img: new URL('/assets/movie_posters/mv4.png', import.meta.url).href,
            releaseYear: 2009,
        },
        reviewer: {
            name: 'James (Schaffrillas)',
            profileImg: new URL(
                '/assets/user_profiles/pfp1.jpeg',
                import.meta.url
            ).href,
            dateTime: '2022-04-18 11:30am',
            rating: 3.5,
            likes: 670,
            comments: 22,
            review: 'Call me by your name and I will call you by mine. It’s sound track is just ...',
        },
    },
];
