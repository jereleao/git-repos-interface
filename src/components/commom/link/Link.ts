import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(RouterLink)<{ customColor?: string }>`
  color: ${props => props.customColor || '#FFF'};
  padding: 2px 0;
`;
