import * as React from "react";
import { Frame } from "@react95/core";
import "@react95/icons/icons.css";
import NavBar from "../components/Navbar";
import Layout from "../components/layout";
import PageTitle from "../components/PageTitle";

// markup
const AboutPage = () => {
  return (
    <Layout>
      <title>Home Page</title>
      <div>
      <PageTitle title="Dale Palmer Jr - About Me" />
        <Frame data-hide="me" width={"100%"} height={500} padding={4}>
          <Frame height="100%" boxShadow="in" bg="rgb(195, 199, 203)">
            Under Construction
          </Frame>
        </Frame>
      </div>
      <NavBar />
    </Layout>
  );
};

export default AboutPage;
