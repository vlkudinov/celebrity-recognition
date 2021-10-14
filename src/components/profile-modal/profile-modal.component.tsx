import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileOpen, updateProfileStart } from 'src/redux/user/user.reducer';
import { RootState } from 'src/model';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import Avatar from 'src/components/avatar/avatar.component';
import { selectUserFullName } from 'src/redux/user/user.selectors';
import { useState } from 'react';
import { selectHistoryLength } from 'src/redux/history/history.selectors';
import {
  ModalBox, ModalProfileSubtitle, ModalAvatarContainer, ModalButtonGroup,
} from './profile-modal.styles';

const ProfileModal = () => {
  const dispatch = useDispatch();
  const isProfileOpened = useSelector(({ user } : RootState) => user.isProfileOpened);
  const {
    firstName, lastName, joined, age,
  } = useSelector(({ user } : RootState) => user.credentials!);
  const fullName = useSelector(selectUserFullName);
  const entries = useSelector(selectHistoryLength);

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
