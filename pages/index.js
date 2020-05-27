import React from 'react';
import { Text } from 'herm';
import Layout from '../components/Layout';
import fetch from 'node-fetch';

import withApollo from '../lib/apollo';
import Account from '../components/Account';

function Index({ me }) {
  return (
    <Layout me={me}>
      <Text fontSize="32px">Hello, {me.name}</Text>
      <Account/>
    </Layout>
  );
}

Index.getInitialProps = async function(context) {
  const res = await fetch(`${process.env.BASE_URL}/api/me`,
    {
      headers: {
        cookie: context.req.headers.cookie
      }
    });
  const me = await res.json();

  console.log(me);

  if(me.error)
  {
    console.log(me);
    context.res.writeHead(302, {
      Location: 'api/login'
    });
    context.res.end();
    return;
  }

  return {me};
}
export default withApollo(Index);
