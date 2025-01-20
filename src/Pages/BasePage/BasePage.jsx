import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { PageContainer, ContentWrapper } from "./BasePage.styled";

const BasePage = () => {
  return (
    <PageContainer>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Footer />
    </PageContainer>
  );
};

export default BasePage;
