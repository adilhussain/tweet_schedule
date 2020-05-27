import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

export default async function signup(req, res) {
  try {
    console.log("PP:: creating client");
    const client = await createClient(req);
    console.log("PP:: client created");
    await checkAndRegisterUser(client);
    console.log("PP:: user checked");
    res.writeHead(302, { Location: '/' });
    res.end();
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}



async function createClient(req) {
  const cache = new InMemoryCache();
  console.log(req.headers);
  console.log("PP:: what", `${process.env.BASE_URL}/api/graphql`);
  const link = createHttpLink({
    uri: `${process.env.BASE_URL}/api/graphql`,
    fetch: fetch,
    credentials: 'same-origin',
    headers: req.headers
  });
  const client = new ApolloClient({
    cache,
    link
  });
  console.log("HEY");
  return client;
}

async function checkAndRegisterUser(client) {
  const result = await client.mutate({
    mutation: gql`
      mutation CheckAndRegisterUser {
        checkAndRegisterUser {
          affected_rows
        }
      }
    `
  });
  return result;
}
