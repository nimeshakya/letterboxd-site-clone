import React from 'react';

import ContentGroup from '../../ContentGroup/ContentGroup';
import PopList from './PopList';

import './PopularLists.scss';

const PopularLists = () => {
    const popLists = [
        {
            movies: [
                {
                    img: new URL(
                        '/assets/movie_posters/mv10.png',
                        import.meta.url
                    ).href,
                },
                {
                    img: new URL(
                        '/assets/movie_posters/mv8.png',
                        import.meta.url
                    ).href,
                },
                {
                    img: new URL(
                        '/assets/movie_posters/mv7.png',
                        import.meta.url
                    ).href,
                },
                {
                    img: new URL(
                        '/assets/movie_posters/mv6.png',
                        import.meta.url
                    ).href,
                },
                {
                    img: new URL(
                        '/assets/movie_posters/mv17.png',
                        import.meta.url
                    ).href,
                },
            ],
            author: 'Clemmine',
            authorImg: new URL(
                '/assets/user_profiles/pfp2.jpeg',
                import.meta.url
            ).href,
            description: 'its the scariest to somebody',
            likes: 1000,
            comments: 130,
        },
        {
            movies: [
                {
                    img: new URL(
                        '/assets/movie_posters/mv30.png',
                        import.meta.url
                    ).href,
                },
                {
                    img: new URL(
                        '/assets/movie_posters/mv29.png',
                        import.meta.url
                    ).href,
                },
                {
                    img: new URL(
                        '/assets/movie_posters/mv28.png',
                        import.meta.url
                    ).href,
                },
                {
                    img: new URL(
                        '/assets/movie_posters/mv27.png',
                        import.meta.url
                    ).href,
                },
                {
                    img: new URL(
                        '/assets/movie_posters/mv26.png',
                        import.meta.url
                    ).href,
                },
            ],
            author: 'Karsten Kim',
            authorImg: new URL(
                '/assets/user_profiles/pfp2.jpeg',
                import.meta.url
            ).href,
            description: 'Top rated hindi movies 2022',
            likes: 1550,
            comments: 0,
        },
    ];

    return (
        <ContentGroup
            id='popular-lists'
            headingText='Popular lists'
            hasMore={true}
        >
            <div className='pop-lists-container'>
                {popLists.map((list, index) => {
                    return <PopList key={index} list={list} />;
                })}
            </div>
        </ContentGroup>
    );
};

export default PopularLists;
