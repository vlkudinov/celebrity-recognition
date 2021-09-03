import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import Logo from 'src/components/logo/logo.component';
import { signOut } from 'src/redux/user/user.reducer';
import { NavigationContainer, MenuLink } from 'src/components/navigation/navigation.styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../model';

const Navigation : React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isSignedIn = useSelector((state: RootState) => state.user.isSignedIn);
  const dispatch = useDispatch();

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
          {isSignedIn ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
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
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={() => dispatch(signOut())}>Sign Out</MenuItem>
              </Menu>
            </div>
          )
            : (
              <div>
                <MenuLink component={RouterLink} to="/sign-in">
                  Sign in
                </MenuLink>
                <MenuLink component={RouterLink} to="/sign-up">
                  Sign up
                </MenuLink>
              </div>
            )}
        </Toolbar>
      </AppBar>
    </NavigationContainer>
  );
};

export default Navigation;
