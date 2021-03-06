import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileOpen, updateProfileStart } from 'src/redux/user/user.reducer';
import { RootState } from 'src/model';
import { selectUserFullName } from 'src/redux/user/user.selectors';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import {
  Backdrop, Box, Modal, Fade, TextField, Divider, Button,
} from '@mui/material';
import Avatar from 'src/components/avatar/avatar.component';
import { ModalBox, ModalProfileSubtitle, ModalAvatarContainer, ModalButtonGroup } from 'src/components/profile-modal/profile-modal.styles';

const ProfileModal = () => {
  const dispatch = useDispatch();
  const isProfileOpened = useSelector(({ user } : RootState) => user.isProfileOpened);
  const { firstName, lastName, joined, age } = useSelector(({ user } : RootState) => user.credentials!);
  const fullName = useSelector(selectUserFullName);
  const entries = useSelector(({ history } : RootState) => history.images.length);

  const initialState = { firstName, lastName, age };
  const [userCredentials, setCredentials] = useState(initialState);

  const handleChange = ({ target: { value, name } } : React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(updateProfileStart(userCredentials));
  };

  const handleClose = () => dispatch(setProfileOpen(false));

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isProfileOpened}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isProfileOpened}>
          <ModalBox>
            <ModalAvatarContainer>
              <Avatar size="lg" />
            </ModalAvatarContainer>
            <ModalProfileSubtitle>
              <AccountBoxRoundedIcon />
              {`Name: ${fullName}`}
            </ModalProfileSubtitle>
            <ModalProfileSubtitle>
              <ImageRoundedIcon />
              {`Images Submitted: ${entries}`}
            </ModalProfileSubtitle>
            <ModalProfileSubtitle>
              <DateRangeRoundedIcon />
              {`Member since: ${new Date(joined).toLocaleDateString()}`}
            </ModalProfileSubtitle>
            <Box margin="10px 0">
              <Divider />
            </Box>
            <form onSubmit={handleFormSubmit}>
              <TextField
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                margin="normal"
                autoFocus
                value={userCredentials.firstName}
                onChange={handleChange}
              />
              <TextField
                id="lastName"
                fullWidth
                required
                label="Last Name"
                margin="normal"
                name="lastName"
                value={userCredentials.lastName}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                id="age"
                label="Age"
                margin="normal"
                name="age"
                value={userCredentials.age}
                onChange={handleChange}
              />
              <ModalButtonGroup spacing={2} direction="row">
                <Button type="submit" variant="contained" fullWidth>Save</Button>
                <Button variant="contained" onClick={handleClose} fullWidth>Cancel</Button>
              </ModalButtonGroup>
            </form>
          </ModalBox>
        </Fade>
      </Modal>
    </>
  );
};

export default ProfileModal;
