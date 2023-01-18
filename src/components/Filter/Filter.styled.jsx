import styled from '@emotion/styled';

export const FilterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${p => p.theme.space[5]}px;
`;

export const FilterLabel = styled.label`
  color: ${p => p.theme.colors.darkBlue};
`;

export const FilterInput = styled.input`
  width: auto;
  height: 25px;
  text-align: center;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.steelBlue}`};
  margin-left: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.snow};
  color: ${p => p.theme.colors.darkBlue};

  cursor: pointer;

  &:focus {
    outline: transparent;
    border: ${p => `${p.theme.borders.bigSize} ${p.theme.colors.steelBlue}`};
  }
`;
