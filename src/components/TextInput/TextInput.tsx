import * as React from "react";

import styled from "styled-components";

import { ErrorMessage } from "src/components";
import { darken } from "polished";

export interface TextInputProps {
  error?: string;
  touched?: boolean;
}

export const InputContainer = styled.div`
  display: flex;
`;

export const Input = styled.input<{ touched?: boolean; error?: string }>`
  border: 1px solid
    ${(p) =>
      p.touched && p.error ? p.theme.colors.error : p.theme.colors.greyLight};
  outline: 0;
  margin: 0;
  border-radius: ${(p) => p.theme.borderRadius};
  background: ${(p) => darken(0.05)(p.theme.colors.light)};
  :focus {
    background: ${(p) => p.theme.colors.light};
  }
  :disabled {
    background: ${(p) => darken(0.1)(p.theme.colors.light)};
  }
  width: 100%;
  font-size: ${(p) => p.theme.font.medium};
  color: ${(p) => p.theme.colors.dark};
  padding: ${(p) => p.theme.spacing.small};
  transition: all 200ms;
`;

export const TextInput = (
  props: TextInputProps &
    Omit<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      "ref"
    >
) => {
  const { touched, error } = props;
  return (
    <>
      <InputContainer>
        <Input {...props} />
      </InputContainer>
      {touched && error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};
