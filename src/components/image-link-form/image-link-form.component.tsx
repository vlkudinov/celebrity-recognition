import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import InputAdornment from '@mui/material/InputAdornment';
import { RootState } from '../../model';
import { saveInput, sendImageStart } from '../../redux/image/image.reducer';
import { WhiteBorderTextField, BlackClearIcon } from './image-link-form.styles';

const ImageLinkForm = () => {
  const dispatch = useDispatch();
  const input = useSelector(({ image }: RootState) => image.input);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(sendImageStart());
  };

  const handleChange = ({ target: { value } } : React.ChangeEvent<HTMLInputElement>) => {
    dispatch(saveInput(value));
  };

  const handleClear = () => {
    dispatch(saveInput(''));
  };

  return (
    <>
      <WhiteBorderTextField
        fullWidth
        helperText="link should contain file extension (.jpg, .png and etc.)"
        label="Image link"
        value={input}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {input && <BlackClearIcon onClick={handleClear} />}
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" fullWidth sx={{ marginTop: '15px' }} onClick={handleSubmit}>Send Link</Button>
    </>
  );
};

export default ImageLinkForm;
