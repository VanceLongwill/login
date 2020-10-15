import styled from "styled-components";
import { Theme } from "src/theme";

export const VerticalCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SpaceBetween = styled(VerticalCenter)`
  justify-content: space-between;
`;

export const VerticalRhythm = styled.div<{ gap?: keyof Theme["spacing"] }>`
  width: 100%;
  > *:not(last-of-type) {
    margin-bottom: ${(p) => p.theme.spacing[p.gap || "small"]};
  }
`;
