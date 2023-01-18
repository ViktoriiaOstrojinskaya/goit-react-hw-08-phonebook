import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 100%;
`;

export const FormInput = styled.input`
  width: auto;
  height: 25px;
  text-align: center;
  margin-left: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.steelBlue}`};
  background-color: ${p => p.theme.colors.snow};
  color: ${p => p.theme.colors.darkBlue};
  cursor: pointer;

  &:focus {
    outline: transparent;
    border: ${p => `${p.theme.borders.bigSize} ${p.theme.colors.steelBlue}`};
  }
`;

export const FormLabel = styled.label`
  color: ${p => p.theme.colors.darkBlue};
`;

export const ButtonAddContact = styled.button`
  width: 85px;
  height: auto;
  cursor: pointer;
  font-size: ${p => p.theme.fontSizes.xs};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.none};
  background-color: ${p => p.theme.colors.steelBlue};
  color: ${p => p.theme.colors.royalBlue};
  transition: all 0.25s;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.royalBlue};
    color: ${p => p.theme.colors.white};
  }
`;
