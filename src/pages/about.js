import * as React from "react";
import {
  Frame,
  Tab,
  Tabs,
  TitleBar
} from "@react95/core";
import "@react95/icons/icons.css";
import JobTab from "../components/JobTab";
import { FileIcons } from "@react95/icons"
import NavBar from "../components/Navbar"


const pageStyles = {
  color: "#232129",
  backgroundColor: "#6fc9b0",
  padding: 30,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const tabs = [
  {
    tabTitle: "House Happy",
    jobTitle: "",
    tools: "",
    resps: ""
  },
  {
    tabTitle: "PlusQa",
    jobTitle: "",
    tools: "",
    resps: ""
  }
]

// markup
const AboutPage = () => {

  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <div>
      <TitleBar
    active
    icon={<FileIcons variant="32x32_4" />}
    title="Dale Palmer Jr - Experience"
    className="draggable"
    width={"100%"}
  >
    <TitleBar.OptionsBox>
      <TitleBar.Option>?</TitleBar.Option>
      <TitleBar.Option>X</TitleBar.Option>
    </TitleBar.OptionsBox>
  </TitleBar>
        <Frame width={"100%"} height={500} padding={4}>
          <Frame height="100%" boxShadow="in" bg="rgb(195, 199, 203)">
            Under Construction
          </Frame>
        </Frame>
      </div>
     <NavBar />
    </main>
  );
};

export default AboutPage;