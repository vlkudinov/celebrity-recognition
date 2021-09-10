import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary } from './withAccordions.styles';

const withAccordion = (Component : React.FC, title : string) => (
  <Accordion defaultExpanded>
    <AccordionSummary aria-controls={`${title}-content`} id={`${title}-header`}>
      <Typography>{title.toUpperCase()}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Component />
    </AccordionDetails>
  </Accordion>
);

export default withAccordion;
