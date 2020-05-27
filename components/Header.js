import React from 'react';
import { Box, Flex, LogoIcon, User, Link } from 'herm';
function Header({me}) {
  return (
    <Box backgroundColor="#fafafb" paddingLeft="50px" paddingRight="50px">
      <Flex alignItems="center" justifyContent="space-between" height="50px">
        <LogoIcon></LogoIcon>
        <User
          username={me.name}
          sub="Scheduled for 16th December at 09:30 AM"
        >
          <Flex alignItems="center">
            <Box>
              <img style={{width: '90%', display: 'block', borderRadius: '50%'}} src={me.picture} alt={me.name}/>
            </Box>
            <Box marginLeft="12px">
              <User.Username></User.Username>
            </Box>
            <Box marginLeft="12px">
              <Link href="/api/logout">Logout</Link>
            </Box>
          </Flex>
        </User>
      </Flex>
    </Box>
  );
}

export default Header;
