import styled from '@emotion/styled';

export const ListTitle = styled.p`
  margin-top: ${p => p.theme.space[6]}px;
`;

export const ContactItem = styled.p`
  font-style: italic;
  color: ${p => p.theme.colors.royalBlue};
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${p => p.theme.fontSizes.s};
  padding: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.steelBlue}`};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ButtonDelete = styled.button`
  width: 85px;
  height: 30px;
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
