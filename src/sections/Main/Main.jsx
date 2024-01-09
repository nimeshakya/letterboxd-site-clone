import React, { useState } from 'react';
import axios from 'axios';

import { pop_week_movies } from '../../images/ImagesData';

import ContentGroup from '../../components/ContentGroup/ContentGroup';
import ContentPlainImg from '../../components/Contents/ContentPlainImg/ContentPlainImg';

import './Main.scss';

const Main = () => {
    return (
        <main>
            <ContentGroup
                id='pop-week-content'
                headingText={'Popular this week'}
                hasMore={true}
                description={'hello, I am nimesh'}
            >
                {pop_week_movies.map((movie, index) => {
                    return (
                        <img
                            key={index}
                            src={movie.img}
                            alt={movie.description}
                        />
                    );
                })}
            </ContentGroup>
        </main>
    );
};

export default Main;
