import React, { ReactNode } from 'react';
import styled from 'styled-components';

export const Value: React.FC<{ label: string; value: ReactNode }> = ({
  label,
  value,
}) => {
  if (!value) return null;

  const P = styled.p`
    margin: 0.5em 0;
  `;

  return (
    <P>
      {label}
      {': '}
      <b>{value}</b>
    </P>
  );
};
