import React from 'react';
import { Box, Nav, NavItem, ScheduleIcon, FeedsIcon, ProfileIcon } from 'herm';
function Sidebar() {
  return (
    <Box
      backgroundColor="#fafafb"
      height="100vh"
      width="270px"
      paddingTop="40px"
      paddingLeft="30px"
      paddingRight="30px"
    >
      <Nav>
        <NavItem Icon={FeedsIcon}>Feeds</NavItem>
        <NavItem Icon={ScheduleIcon}>Schedule</NavItem>
        <NavItem Icon={ProfileIcon}>Account</NavItem>
      </Nav>
    </Box>
  );
}
export default Sidebar;

// az webapp create \
//   --resource-group herm \
//   --plan hermapiplan \
//   --name hermapi259 \
//   --multicontainer-config-type compose \
//   --multicontainer-config-file docker-compose.prod.yml
//
// az postgres server create \
// --name hermdb259 \
// --resource-group herm \
// --location uksouth \
// --admin-user adilhussain \
// --admin-password 12characterPassword \
// --sku-name B_Gen5_1 \
// --version 10
//
//
// az webapp config appsettings set \
//   --resource-group herm \
//   --name hermapi259 \
//   --settings HASURA_GRAPHQL_DATABASE_URL="postgres://adilhussain%40hermdb259:12characterPassword@hermdb259.postgres.database.azure.com:5432/postgres"
//
// az webapp config appsettings set \
//   --resource-group herm \
//   --name hermapi259 \
//   --settings \
//     HASURA_GRAPHQL_ADMIN_SECRET="mytopsecret"
//
// az postgres server firewall-rule create \
//   --resource-group herm \
//   --server hermdb259 \
//   --name AllowIps \
//   --start-ip-address 0.0.0.0 \
//   --end-ip-address 255.255.255.255
//
// az webapp config appsettings set \
//   --resource-group herm \
//   --name hermapi259 \
//   --settings \
//     HASURA_GRAPHQL_ENABLE_CONSOLE="true" \
//     HASURA_GRAPHQL_ENABLED_LOG_TYPES="startup, http-log, webhook-log, websocket-log, query-log"
//
// az postgres server create \
//   --name hermdb \
//   --resource-group herm \
//   --location uksouth \
//   --admin-user <server_admin_username> \
//   --admin-password <server_admin_password> \
//   --sku-name B_Gen5_1 \
//   --version 10
