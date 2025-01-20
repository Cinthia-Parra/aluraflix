import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 18.75rem;
  color: #d19a22;
  background-color: #d19a22;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardActions = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.7);
  color:black;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #d19a22;
  cursor: pointer;
  font-size: 1.25rem;

  &:hover {
    color:#d19a22;
  }
`;
