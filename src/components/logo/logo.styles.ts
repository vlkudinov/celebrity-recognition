import styled from '@emotion/styled';
import { ReactComponent as LogoSVG } from './logo.svg';

export const LogoContainer = styled.div({
  marginRight: 'auto',
  a: {
    display: 'flex',
  },
});

export const LogoIcon = styled(LogoSVG)(({ theme }) => ({
  width: 35,
  height: 35,
  fill: theme.palette.text.primary,
}));
