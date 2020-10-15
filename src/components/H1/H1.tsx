import styled from "styled-components";
import { Theme } from "src/theme";

export const H1 = styled.h1<{ color?: keyof Theme["colors"] }>`
  margin: 0;
  color: ${(p) => p.theme.colors[p.color || "dark"]};
  font-weight: ${(p) => p.theme.font.bold};
  font-size: ${(p) => p.theme.font.large};
`;
