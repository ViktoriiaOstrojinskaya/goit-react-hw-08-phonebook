import styled from '@emotion/styled';

export const ListTitle = styled.p`
  margin-top: ${p => p.theme.space[5]}px;
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
  border-bottom: ${p =>
    `${p.theme.borders.normal} ${p.theme.colors.steelBlue}`};
`;

export const ButtonDelete = styled.button`
  width: 85px;
  height: 30px;
  font-size: ${p => p.theme.fontSizes.xs};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.none};
  background-color: ${p => p.theme.colors.steelBlue};
  color: ${p => p.theme.colors.royalBlue};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.royalBlue};
    color: ${p => p.theme.colors.white};
  }
`;
