import React from 'react';

import ContentGroup from '../../components/ContentGroup/ContentGroup';

import './Main.scss';

const Main = () => {
    return (
        <main>
            <ContentGroup
                headingText={'Popular this week'}
                hasMore={true}
                description={'hello, I am nimesh'}
            ></ContentGroup>
        </main>
    );
};

export default Main;
