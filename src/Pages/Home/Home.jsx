import React from "react";
import { useVideoContext } from "../../Contexts/VideoContext";

import { Main } from "./Home.styled";
import CategoryVideos from "../../Components/CategoryVideos/CategoryVideos";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
  const { videos, loading } = useVideoContext();

  if (loading) {
    return <div>Carregando...</div>;
  }

  const featuredVideo = videos[0];

  return (
    <>
      <Main>
        {featuredVideo && <Banner video={featuredVideo} />}
        <CategoryVideos />
      </Main>
    </>
  );
};

export default Home;
