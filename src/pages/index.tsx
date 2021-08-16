import React, { FC } from 'react';
import Head from 'next/head';

import Component from '@components/Component';

const Home: FC = () => {
    return (
        <>
            <Head>
                <title>Next.js Boilerplate</title>
            </Head>
            <Component />
        </>
    );
};

export default Home;
