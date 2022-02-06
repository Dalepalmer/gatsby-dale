import * as React from "react";
import { Frame, Tab, Tabs } from "@react95/core";
import "@react95/icons/icons.css";
import JobTab from "../components/JobTab";
import PageTitle from "../components/PageTitle";
import Layout from "../components/layout";

const tabs = [
  {
    company: "House Happy",
    title: "Software Engineer",
    tools: "Elixir, Phoenix, Ecto, React, React Native",
    resps: "",
  },
  {
    company: "PlusQa",
    title: "Lead Software Developer",
    tools: "Ruby, Rails, Active Record, React, React Native",
    resps: "",
  },
  {
    company: "Ride With GPS",
    title: "Intern",
    tools: "Ruby, Rails, Backbone.js",
    resps: "",
  },
  {
    company: "Cleveland Museum of Art",
    title: "Art Handler",
    tools: "Hammer, Level, Drill, Hanging stick",
    resps: "",
  },
  {
    company: "Akron Art Museum",
    title: "Building Services/Art Preparator",
    tools: "Broom, Mop, Sometimes hammer/level/drill",
    resps: "",
  },
  {
    company: "Eddy's Bike Shop",
    title: "Sales",
    tools: "Knowledge, Patience, Charisma",
    resps: "",
  },
];

// markup
const ExperiencePage = () => {
  return (
    <Layout>
      <div>
        <PageTitle title="Dale Palmer Jr - Experience" />
        <Frame data-hide="me" width={"100%"} height={500} padding={4}>
          <Frame height="100%" boxShadow="in" bg="rgb(195, 199, 203)">
            <Tabs style={{ width: 500 }} defaultActiveTab="House Happy">
              {tabs.map((tab, index) => {
                return (
                  <Tab key={index} title={tab.company}>
                    <JobTab job={tab} />
                  </Tab>
                );
              })}
            </Tabs>
          </Frame>
        </Frame>
      </div>
    </Layout>
  );
};

export default ExperiencePage;
