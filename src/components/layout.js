import React from 'react';
import Header from './header';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/core';
import Footer from './footer';
import useSeo from '../hooks/use-seo';
 

const Layout = (props) => {

   const seo = useSeo();
   const { siteName, fallbackSeo: { description, title } } = seo; 
  
    return ( 
        <>
        <Global
        styles={css`
            html {
                font-size: 62.5%;
                box-sizing: border-box;
            }
            *, *:before, *:after {
                box-sizing: inherit;
            }
            body {
                font-size: 18px;
                font-size: 1.8rem;
                line-height: 1.5;
                font-family: 'PT Sans', sans-serif;
            }
            h1, h2, h3 {
                margin: 0;
                line-height: 1.5;
            }
            h1, h2 {
                font-family: 'Roboto', serif;
            }
            h3 {
                font-family: 'PT Sans', sans-serif;
            }
            ul {
                list-style: none;
                margin: 0;
                padding:0;
            }
        `}
    />
        <Helmet>
                <title>Hotel Gatsby</title>
                <meta name="description" content='hotel_gatsby' />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&display=swap" rel="stylesheet" />
        </Helmet>
        <Header 
          description={description}
          />


        {props.children}
       
             
        <Footer 
         title={title}
         siteName={siteName}
        />
           
        </>
     );
}
 
export default Layout;