import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaRegEnvelope, FaLink } from 'react-icons/fa6';
export const recentNewsData = [
    {
        type: 'interview',
        date: '13 AUG 2022',
        img: new URL('/assets/movie_posters/mv16.png', import.meta.url).href,
        heading: 'What is special about the movie Tumbbad?',
        description:
            'Most of the Bollywood horror movies you watch are either a copy of the Hollywood horror franchise or its narration is similar to Hollywood. Tumbbad is different, it has its unique style which is completely new to Indian cinema. With its impressive visuals, realistic atmosphere...',
        author: 'HORROR_FREAK',
        authorImg: new URL('/assets/user_profiles/pfp4.png', import.meta.url)
            .href,
        mediaLinks: [
            {
                media: 'Facebook',
                link: '',
                icon: <FaFacebook />,
            },
            {
                media: 'Twitter',
                link: '',
                icon: <FaTwitter />,
            },
            {
                media: 'Mail',
                link: '',
                icon: <FaRegEnvelope />,
            },
            {
                media: 'Link',
                link: '',
                icon: <FaLink />,
            },
        ],
    },
    {
        type: 'journal',
        date: '03 FEB 2022',
        img: new URL('/assets/movie_posters/mv15.png', import.meta.url).href,
        heading: 'How did Prem Geet 3 got that much money investment?',
        description:
            'Most of the Bollywood horror movies you watch are either a copy of the Hollywood horror franchise or its narration is similar to Hollywood. Tumbbad is different, it has its unique style which is completely new to Indian cinema. With its impressive visuals, realistic atmosphere...',
        author: 'Bryan Fernedes',
        authorImg: new URL('/assets/user_profiles/pfp11.png', import.meta.url)
            .href,
        mediaLinks: [
            {
                media: 'Facebook',
                link: '',
                icon: <FaFacebook />,
            },
            {
                media: 'Twitter',
                link: '',
                icon: <FaTwitter />,
            },
            {
                media: 'Mail',
                link: '',
                icon: <FaRegEnvelope />,
            },
            {
                media: 'Link',
                link: '',
                icon: <FaLink />,
            },
        ],
    },
];
