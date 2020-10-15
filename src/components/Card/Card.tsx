import styled from "styled-components";
import { Theme } from "src/theme";

export interface CardProps {
  padding?: keyof Theme["spacing"];
}

export const Card = styled.div<CardProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${(p) => (p.padding ? p.theme.spacing[p.padding] : "0")};
  border-radius: ${(p) => p.theme.borderRadius};
  box-shadow: ${(p) => p.theme.shadow};
  width: 100%;
  max-width: 400px;
  @media screen and (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    box-shadow: none;
    max-width: 100%;
  }
`;
