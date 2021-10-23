import React from 'react'
import ReactDOM from 'react-dom';
import '../styles/globals.css'

global.React = React
global.ReactDOM = ReactDOM

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
