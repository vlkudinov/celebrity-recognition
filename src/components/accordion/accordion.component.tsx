import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary } from 'src/components/accordion/accordion.style';
import { AccordionProps } from 'src/components/accordion/accordion.interface';

const Accordion : React.FC<AccordionProps> = ({ children, title } : AccordionProps) => (
  <MuiAccordion defaultExpanded>
    <AccordionSummary aria-controls={`${title}-content`} id={`${title}-header`}>
      <Typography>{title.toUpperCase()}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      {children}
    </AccordionDetails>
  </MuiAccordion>
);

export default Accordion;
