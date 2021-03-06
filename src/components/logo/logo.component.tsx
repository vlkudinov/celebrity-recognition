import React from 'react';
import { Link } from 'react-router-dom';
import { LogoContainer, LogoIcon } from 'src/components/logo/logo.styles';

const Logo = () => (
  <LogoContainer>
    <Link to="/">
      <LogoIcon />
    </Link>

  </LogoContainer>
);

export default Logo;
