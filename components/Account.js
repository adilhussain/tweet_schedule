import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const ALL_ACCOUNTS_QUERY = gql`
  query AllAccountsQuery {
    account {
      account_name
    }
  }
`;

const Account = () => {
  const { loading, error, data } = useQuery(ALL_ACCOUNTS_QUERY);
  if (error) {
    console.log("AR:: " , error);
    return <div>Errorr</div>;
  }
  if (loading) return <div>Loading</div>;
  if (data.account.length < 1) return <div>Your query was successful but no account was found.</div>;
  return (
    <div>
      {data.account.map(account => (
        <div>{account.account_name}</div>
      ))}
    </div>
  );
};
export default Account;




az storage account create \
    --name hermserverlessstorage259 \
    --location uksouth \
    --resource-group hermserverless \
    --sku Standard_LRS

az functionapp create \
    --resource-group hermserverless \
    --consumption-plan-location uksouth \
    --name hermserverless259 \
    --storage-account hermserverlessstorage259 \
    --runtime node

az functionapp config appsettings set \
    --name hermserverless259 \
    --resource-group hermserverless \
    --settings "GRAPHQL_BASE_API=https://hermserverless259.azurewebsites.net/api/checkandregisteruser?code=9Wd0dsVavoYtpalSZuNoqqLFV5C9jRfLRnc/8qxwagSnaddlavTulw=="

az webapp log tail \
    --resource-group hermserverless \
    --name hermserverless259

az webapp config appsettings set \
    --resource-group herm \
    --name hermapi259 \
    --settings \
    ACTIONS_BASE_URL=https://hermserverless259.azurewebsites.net/api/checkAndRegisterUser

az webapp config appsettings set \
    --resource-group herm \
    --name hermapi259 \
    --settings \
    HASURA_GRAPHQL_JWT_SECRET='{"type": "RS512", "key": "-----BEGIN CERTIFICATE-----\nMIIC+zCCAeOgAwIBAgIJOB5YmfgdUPDKMA0GCSqGSIb3DQEBCwUAMBsxGTAXBgNV\nBAMTEGFhZGlsbC5hdXRoMC5jb20wHhcNMjAwNTI3MDYwMDQwWhcNMzQwMjAzMDYw\nMDQwWjAbMRkwFwYDVQQDExBhYWRpbGwuYXV0aDAuY29tMIIBIjANBgkqhkiG9w0B\nAQEFAAOCAQ8AMIIBCgKCAQEApJe4sKiM+zgcG2n9GwEAfikEwty1cnGZryK3LiEZ\nEJyltl9K9RgqaNHJAR/bQIdvdtOOg91sp9Ck2NXf/g0LZiY/sVvUzv+yvXEK2KdV\nm1t8GRxNRLULAWZMOFB3963LE9ILtefEdc4YcRoMhKlt099t/lup9wRU86qwmdEu\nLHs68bRpZS4cTBUK19BBcVX/DjEyHNI+VSGVoHi5XQrYjA7hwOK/b0UphVpnqCcj\nYQ3RSlWJF5JVaCVgk0DTS83OoJ7xiQ7QWVKNeGjQl+IF0Cx5HS1EGF+v5vmNcPSC\ng5EswTZLHJy5RC3f83q1i4g5wz83Eg3iTsHOqwFOVmT0DwIDAQABo0IwQDAPBgNV\nHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQn8bIyMsi/SsT0JtpsPMieh8KNGjAOBgNV\nHQ8BAf8EBAMCAoQwDQYJKoZIhvcNAQELBQADggEBAHNuiSkTuKhrXr/zTBFREE4v\nvsTHlJUehXOocWGiPC2RJvwOx+4Uc+6t/2FC24/ymzBgcenit7zfo/AUxRW83Zdn\n2kbdg5pbGbYA6eIPH3Xi6zx3+TcKvoBwpCSX085kOQLWrJ7ZzWNciKctBDj6VLqs\nKcT7iPqkzw+6V/mkIaj03RV1d1Mq7z9mKFQQwh/pgVU28WgOAvsmJ10siYZk4nyJ\nrnhMhU7yXjaXxF/DRvxt8L3sTSJrFSbgL/jK2nYtRtijjkcOw6YDVt/Ln1EB7F4d\nsM14Wr/3HOHaEwSpRSKwlHZpsv0Hv+wyiPId2yhjnuZo7kcfjbI0o+CK0TyZwH0=\n-----END CERTIFICATE-----"}'


hasura migrate apply \
    --endpoint https://hermapi259.azurewebsites.net \
--admin-secret mytopsecret


az webapp config appsettings set \
    --resource-group herm \
    --name hermapp259 \
    --settings \
    APP_BASE_URL="https://hermapp259.azurewebsites.net" \
APP_BASE_API="https://hermapi259.azurewebsites.net" \
AUTH0_DOMAIN="aadill.auth0.com" \
AUTH0_CLIENT_ID="diNn3K67B1t259EmHqi8mQ3gfnUiu10A" \
AUTH0_CLIENT_SECRET="-FsOVk-ltmRUO9xno6NFsKQhFo6d5oUSFNNl9GSGKVTT2Zo3vK1b9O-CQjWS_N9t" \
AUTH0_COOKIE_SECRET="diNn3K67B1t259EmHqi8mQ3gfnUiu10A12" \
AUTH0_REDIRECT_URL="https://hermapp259.azurewebsites.net/api/callback"
