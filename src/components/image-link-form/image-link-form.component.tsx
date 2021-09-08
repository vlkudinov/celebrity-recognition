import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import { RootState } from '../../model';
import { saveInput, sendImageStart } from '../../redux/image/image.reducer';
import { WhiteBorderTextField, BlackLinkIcon, BlackClearIcon } from './image-link-form.styles';
import { Accordion, AccordionSummary, AccordionDetails } from '../accordion/accordion.styles';

const ImageLinkForm = () => {
  const dispatch = useDispatch();
  const input = useSelector(({ image }: RootState) => image.input);
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  // eslint-disable-next-line max-len
  const handleAccChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

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
      <Accordion expanded={expanded === 'panel1'} onChange={handleAccChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>INPUT</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ImageLinkForm;
