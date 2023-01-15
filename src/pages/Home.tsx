import React from "react";
import { NavigationBar } from "../common/components/NavigationBar";
import { PageWrapper } from "../common/components/PageWrapper";
import { Home as HomeContainer } from "../containers/Home";

export const Home = () => {
  return (
    <PageWrapper>
      <NavigationBar />
      <HomeContainer />
    </PageWrapper>
  );
};
