import styled from '@emotion/styled';

export const Box = styled.div`
  padding: ${p => p.theme.space[7]}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleHome = styled.h1`
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.darkBlue};
  text-align: center;
`;
