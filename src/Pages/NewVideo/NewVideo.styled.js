import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 0px 0.75rem 0.25rem #d19a22;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Button = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primaryHover};
  color: #fff;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FormTitle = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.color};
`;
