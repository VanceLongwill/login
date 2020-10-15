import styled from "styled-components";

export const Logo = styled.div`
  display: block;
  user-select: none;
  width: 50px;
  height: 70px;
  background: center / contain no-repeat url(${(p) => p.theme.logoSrc});
  margin-right: ${(p) => p.theme.spacing.small};
`;
