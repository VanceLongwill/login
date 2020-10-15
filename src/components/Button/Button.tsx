import styled from "styled-components";
import { lighten } from "polished";

export interface ButtonProps {}

export const Button = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  font-size: ${(p) => p.theme.font.medium};
  border-radius: ${(p) => p.theme.borderRadius};
  background: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.light};
  padding-top: ${(p) => p.theme.spacing.small};
  padding-bottom: ${(p) => p.theme.spacing.small};
  padding-left: ${(p) => p.theme.spacing.medium};
  padding-right: ${(p) => p.theme.spacing.medium};
  border: 0;
  box-shadow: ${(p) => p.theme.shadow};
  transition: all 200ms;
  :hover:not(:disabled) {
    background: ${(p) => lighten(0.1)(p.theme.colors.primary)};
    box-shadow: none;
  }
  :disabled {
    background: ${(p) => p.theme.colors.greyLight};
    cursor: auto;
  }
  ${(p) => p.type === "submit" && `font-weight: ${p.theme.font.bold};`};
`;
