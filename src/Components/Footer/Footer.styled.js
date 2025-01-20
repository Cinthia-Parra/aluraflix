import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.color};
  width: 100%;
  box-shadow: 0px 0px 0.75rem 0.25rem #d19a22;
`;

export const Logo = styled.img`
  height: 3.125rem; /* 50px */
`;
