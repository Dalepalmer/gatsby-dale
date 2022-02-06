import * as React from "react";
import { TaskBar, List} from "@react95/core";
import { Wab321016, Issue, Msnstart100, Mspaint, Drvspace7, Regedit102 } from "@react95/icons"
import "@react95/icons/icons.css";
import { navigate } from "gatsby"

const links = [
  {
    text: "Experience",
    url: "/experience",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
    icon: <Regedit102 variant="32x32_4"/>
  },
  {
    text: "About",
    url: "/about",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
    icon: <Drvspace7 variant="32x32_4"/>
  },
  {
    text: "Education",
    url: "/education",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
    icon: <Msnstart100 variant="32x32_4"/>
  },
  {
    text: "Hobbies",
    url: "/hobbies",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
    icon: <Mspaint variant="32x32_4"/>
  },
  {
    text: "Blog",
    url: "/blog",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
    icon: <Issue variant="32x32_4"/>
  },
]

// markup
function NavBar(props) {
  return (
    <TaskBar
    list={
      <List >
        {links.map((link) => { return (
          <List.Item
          onClick={() => navigate(link.url)}
          icon={link.icon}
        >
          {link.text}
        </List.Item>
        )})}
        <List.Item
          onClick={() => navigate("/")}
          icon={<Wab321016 variant="32x32_4" />}
        >
          Home
        </List.Item>
      </List>
    }
  />
  );
};

export default NavBar;
