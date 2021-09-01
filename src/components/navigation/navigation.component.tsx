import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import Logo from 'src/components/logo/logo.component';
import { NavigationContainer, MenuLink } from 'src/components/navigation/navigation.styles';

const Navigation : React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavigationContainer>
      <AppBar position="static">
        <Toolbar>
          <Logo />
          <MenuLink component={RouterLink} to="/sign-in">
            Sign in
          </MenuLink>
          <MenuLink component={RouterLink} to="/sign-up">
            Sign up
          </MenuLink>
          <div>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </NavigationContainer>
  );
};

export default Navigation;
