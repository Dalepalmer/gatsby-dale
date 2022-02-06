import * as React from "react";
import { Frame } from "@react95/core";
import "@react95/icons/icons.css";
import PageTitle from "../components/PageTitle";
import Layout from "../components/layout";

// markup
const BlogPage = () => {
  return (
    <Layout>
      <div>
        <PageTitle title="Dale Palmer Jr - Blog" />
        <Frame data-hide="me" width={"100%"} height={500} padding={4}>
          <Frame height="100%" boxShadow="in" bg="rgb(195, 199, 203)">
            Under Construction
          </Frame>
        </Frame>
      </div>
    </Layout>
  );
};

export default BlogPage;
