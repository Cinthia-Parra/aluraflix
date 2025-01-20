import {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImg,
  BannerTitle,
} from "./Banner.styled";

const Banner = ({ video }) => {
  return (
    <BannerContainer>
      <BannerBackground src={video.img} alt={video.titulo} />

      <BannerContent>
        <div>
          <BannerTitle category={video.categoria}>
            {video.categoria}
          </BannerTitle>
          <BannerDescription>{video.descricao}</BannerDescription>
        </div>
        <BannerImg src={video.img} alt={video.titulo} />
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
