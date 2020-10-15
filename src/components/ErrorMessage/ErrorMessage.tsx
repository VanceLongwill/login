import styled from "styled-components";

export const ErrorMessage = styled.div`
  font-weight: ${(p) => p.theme.font.bold};
  color: ${(p) => p.theme.colors.error};
`;
