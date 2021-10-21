import React from 'react';
import Avatar from 'src/components/avatar/avatar.component';
import { Link as RouterLink } from 'react-router-dom';
import Logo from 'src/components/logo/logo.component';
import { setProfileOpen, signOutStart } from 'src/redux/user/user.reducer';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import ProfileModal from 'src/components/profile-modal/profile-modal.component';
import { RootState } from 'src/model';
import { AppBar, Toolbar, MenuItem, IconButton, Menu } from '@mui/material';
import { MenuLink } from 'src/components/navigation/navigation.styles';

const Navigation : React.FC = () => {
  const dispatch = useDispatch();
  const userCredentials = useSelector((state: RootState) => state.user.credentials, shallowEqual);
  const isSignedIn = useSelector((state: RootState) => state.user.isSignedIn);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    dispatch(setProfileOpen(true));
    handleClose();
  };

  const handleSignOut = () => {
    dispatch(signOutStart());
    handleClose();
  };

  return (
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
              <Avatar size="sm" />
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
              <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
              <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
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
      {userCredentials && <ProfileModal />}
    </AppBar>
  );
};

export default Navigation;
