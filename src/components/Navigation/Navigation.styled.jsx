import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const BoxNav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
`;

export const StyledLink = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.xs};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.none};
  background-color: ${p => p.theme.colors.steelBlue};
  color: ${p => p.theme.colors.royalBlue};

  &.active {
    background-color: ${p => p.theme.colors.royalBlue};
    color: ${p => p.theme.colors.white};
  }
`;
