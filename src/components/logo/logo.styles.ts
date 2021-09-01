import styled from '@emotion/styled';
import { ReactComponent as LogoSVG } from './logo.svg';

export const LogoContainer = styled.div({
  marginRight: 'auto',
});

export const LogoIcon = styled(LogoSVG)({
  width: 24,
  height: 24,
  fill: 'white',
});
