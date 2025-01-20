import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px; /* Altura do banner */
`;

export const BannerBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
`;

export const BannerImg = styled.img`
  width: 600px;
  border-radius: 15px;
  box-shadow: 0px 0px 0.75rem 0.25remrgb(46, 51, 58);
`;

export const BannerContent = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
`;

export const BannerTitle = styled.h1`
  font-size: 2.5rem;
  background-color: ${({ theme, category }) =>
    theme.colors.categoryColors[category]};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: inline-block;
`;

export const BannerDescription = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
`;
