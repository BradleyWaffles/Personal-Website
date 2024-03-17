import "bootstrap/dist/css/bootstrap.min.css";
import "../app/globals.css";
import React, { ReactNode } from "react";
import Header from "./Header"; // Ensure this matches the export
import Footer from "./Footer"; // Ensure this matches the export
import styled from "styled-components";

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PageLayout className="bg-dark" data-bs-theme="dark">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </PageLayout>
  );
};

export default Layout;
