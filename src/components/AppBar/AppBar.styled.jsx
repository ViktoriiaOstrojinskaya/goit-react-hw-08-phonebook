import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border-bottom: ${p =>
    `${p.theme.borders.bigSize} ${p.theme.colors.steelBlue}`};
`;
