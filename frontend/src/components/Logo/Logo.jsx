import React from 'react';
import styled from 'styled-components';

const Logotype = styled.h1`
  color: ${({ theme }) => theme.white};
  position: relative;
  font-size: 3rem;
  letter-spacing: 4px;
  margin-top: 1rem;
`;

const Logo = ({ children }) => {
  return <Logotype>{children}</Logotype>;
};

export default Logo;
