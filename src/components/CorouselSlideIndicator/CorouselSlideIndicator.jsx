import React, { useState } from 'react';

const CorouselSlideIndicator = ({ highlightedPosition }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='56'
            height='8'
            viewBox='0 0 56 8'
            fill='none'
        >
            {(() => {
                if (highlightedPosition == 1) {
                    return (
                        <>
                            <circle cx='4' cy='4' r='4' fill='white' />
                            <circle cx='28' cy='4' r='4' fill='#E3B55F' />
                            <circle
                                cx='52'
                                cy='4'
                                r='4'
                                fill='white'
                                fillOpacity='0.8'
                            />
                        </>
                    );
                } else if (highlightedPosition == 2) {
                    return (
                        <>
                            <circle
                                cx='4'
                                cy='4'
                                r='4'
                                fill='white'
                                fillOpacity='0.8'
                            />
                            <circle cx='28' cy='4' r='4' fill='white' />
                            <circle cx='52' cy='4' r='4' fill='#E3B55F' />
                        </>
                    );
                } else {
                    return (
                        <>
                            <circle cx='4' cy='4' r='4' fill='#E3B55F' />
                            <circle
                                cx='28'
                                cy='4'
                                r='4'
                                fill='white'
                                fillOpacity='0.8'
                            />
                            <circle cx='52' cy='4' r='4' fill='white' />
                        </>
                    );
                }
            })()}
        </svg>
    );
};

export default CorouselSlideIndicator;
