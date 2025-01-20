import styled from "styled-components";

export const CategoryTitle = styled.h2`
  width: 25%;
  background-color: ${({ theme, category }) =>
    theme.colors.categoryColors[category]};
  color: black;
  padding: 1rem;
  border-radius: 8px;
`;

export const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
