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
    </>
  );
};

export default Page1;
