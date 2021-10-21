import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import InputAdornment from '@mui/material/InputAdornment';
import { RootState } from 'src/model';
import { saveInput, sendImageStart } from 'src/redux/image/image.reducer';
import { BlackClearIcon, WhiteBorderTextField } from 'src/components/image-link-form/image-link-form.styles';

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
    <form onSubmit={handleSubmit}>
      <WhiteBorderTextField
        fullWidth
        required
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
      <Button type="submit" variant="contained" fullWidth sx={{ marginTop: '15px' }}>Send Link</Button>
    </form>
  );
};

export default ImageLinkForm;
