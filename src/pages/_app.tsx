// Package imports
import React from 'react';
import { AppProps } from 'next/app';

// Style imports
import '@styles/styles.scss';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return <Component {...pageProps} />;
};

export default App;
