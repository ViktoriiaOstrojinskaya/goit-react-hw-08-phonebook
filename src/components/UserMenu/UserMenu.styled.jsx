import styled from '@emotion/styled';

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
`;

export const Text = styled.div`
  color: ${p => p.theme.colors.darkBlue};
  font-style: italic;
`;

export const ButtonLogout = styled.button`
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.xs};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.none};
  background-color: ${p => p.theme.colors.steelBlue};
  color: ${p => p.theme.colors.royalBlue};
  cursor: pointer;
  transition: all 0.25s;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.royalBlue};
    color: ${p => p.theme.colors.white};
  }
`;
