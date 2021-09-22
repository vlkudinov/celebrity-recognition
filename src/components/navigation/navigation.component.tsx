import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Avatar from 'src/components/avatar/avatar.component';
import Menu from '@mui/material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import Logo from 'src/components/logo/logo.component';
import { setProfileOpen, signOutStart } from 'src/redux/user/user.reducer';
import { MenuLink } from 'src/components/navigation/navigation.styles';
import { useDispatch, useSelector } from 'react-redux';
import ProfileModal from 'src/components/profile-modal/profile-modal.component';
import { RootState } from '../../model';

const Navigation : React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const userId = useSelector((state: RootState) => state.user.credentials?.id);
  const isSignedIn = useSelector((state: RootState) => state.user.isSignedIn);
  const dispatch = useDispatch();

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
      {userId && <ProfileModal />}
    </AppBar>
  );
};

export default Navigation;
