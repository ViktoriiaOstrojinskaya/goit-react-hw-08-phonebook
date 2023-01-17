import styled from '@emotion/styled';

export const Form = styled.form`
  width: 320px;
  margin: 0 auto;
  padding-top: ${p => p.theme.space[5]}px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 30px;
  padding-left: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.steelBlue}`};
  background-color: ${p => p.theme.colors.snow};
  color: ${p => p.theme.colors.royalBlue};

  &:focus {
    outline: transparent;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.darkBlue};
`;

export const ButtonRegister = styled.button`
  width: 100%;
  padding: ${p => p.theme.space[3]}px;

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
