import styled from "styled-components";

export const StyledButton = styled.button`
  width: 11.26rem;
  height: 2.375rem;
  font-size: 1.25rem;
  font-weight: 200;
  line-height: 1.5rem;
  text-align: center;
  background-color: transparent;
  border: 0.125rem solid, #d19a22;
  border-radius: 0.9375rem;
  transition: all 0.3s ease;
  color:rgb(148, 109, 26);
  cursor: pointer;

  &.active {
    color:  #d19a22;
    background:rgba(0, 0, 0, 0.9);
    border: 0.125rem solid,rgb(214, 206, 188);

  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
