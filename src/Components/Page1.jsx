import React from 'react';
import { Helmet } from 'react-helmet';

const Page1 = () => {
  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>First Page Of App</title>
        <meta
          name='description'
          content='Description of the first page of app'
        />
      </Helmet>
      <div>FIRST PAGE</div>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/-QjKbULq7CE'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </>
  );
};

export default Page1;
