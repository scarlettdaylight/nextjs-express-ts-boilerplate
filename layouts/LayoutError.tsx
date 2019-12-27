import React, { FC } from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
  height: 100vh;
`;

const LayoutError: FC = ({ children }) => (
  <StyledError>
    <h2>Error!</h2>
    {children}
  </StyledError>
);

export default LayoutError;
