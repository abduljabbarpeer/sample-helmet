import React from 'react'
import { Helmet } from 'react-helmet';

const Page2 = () => {
  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>Second Page Of App</title>
        <meta
          name='description'
          content='Description of the second page of app'
        />
      </Helmet>
      <div>SECOND PAGE</div>
    </>
  );
};

export default Page2
