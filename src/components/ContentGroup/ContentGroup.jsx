import React from 'react';
import { Link } from 'react-router-dom';

import './ContentGroup.scss';

const ContentGroup = ({
    children,
    className,
    headingText,
    hasMore,
    description,
}) => {
    return (
        <div className={`content-group ${className}`}>
            <div className='content-group-header'>
                <div className='content-group-heading-container'>
                    <h2>{headingText}</h2>
                    {hasMore && (
                        <Link
                            to='/'
                            onClick={(e) => e.preventDefault}
                            className='more-content-link'
                        >
                            More
                        </Link>
                    )}
                </div>
                {description && (
                    <div className='content-group-description-container'>
                        <p>{description}</p>
                    </div>
                )}
            </div>
            <div className='content-group-contents'>{children}</div>
        </div>
    );
};

export default ContentGroup;
