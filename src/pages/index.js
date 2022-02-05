import * as React from "react"
import { Avatar, Frame} from "@react95/core"
import { Issue } from "@react95/icons"
import styled from 'styled-components'
import '@react95/icons/icons.css'
import { navigate } from "gatsby"

const pageStyles = {
  color: "#232129",
  backgroundColor: "#6fc9b0",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const IconContainer = styled.a`
  display: inline-flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  border: none;
  background-color: transparent;

  :hover {
    cursor: pointer;
  }

  :hover {
    box-shadow: rgb(255 255 255) 0.5px 0.5px 0px 0.5px inset, rgb(134 138 142) 0px 0px 0px 1px inset, rgb(0 0 0) 1px 0px 0px 0px, rgb(0 0 0) 0px 1px 0px 0px, rgb(0 0 0) 1px 1px 0px 0px;
  }

  img:hover {
    cursor: pointer;
    animation: rotation 2s;
    animation-iteration-count: infinite;
  }

  @keyframes rotation {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(359deg);
    }
  }
`

const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const linksContainer = {
  display: 'grid',
  gridTemplateColumns: "33% 33% 33%",
  gridTemplateRows: "50% 50%"
}
const listItemStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionContainer = {
  display: 'flex'
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const divider = {
  backgroundColor: "black",
  height: "1px",
  width: "100%",
  margin: "20px 0"
}

// data
const links = [
  {
    text: "Experience",
    url: "/experience",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "About",
    url: "/about",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Education",
    url: "/education",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Interests",
    url: "/interests",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Hobbies",
    url: "/hobbies",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Blog",
    url: "/blog",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <div>
        <div>
          <Frame style={descriptionContainer} padding={10}>
              <div>
                <h1>Hi! I'm Dale</h1>
                <h2>Welcome to my personal site</h2>
                <h3>Feel free to look around and learn about my life</h3>
              </div>
              <div style={{marginLeft: "auto"}}>
                <Avatar size="200" src="https://avatars.githubusercontent.com/u/10335928?v=4" alt="photo" />
              </div>
          </Frame>
          <div style={divider}></div>
            <Frame width={"100%"} height={400} padding={4}>
              <Frame style={linksContainer} height="100%" boxShadow="in" bg="rgb(195, 199, 203)">
                {links.map((link, index) => { return (
                  <div key={index} style={listItemStyles}>
                      <IconContainer onClick={()=>{navigate(link.url)}}>
                        <p style={{cursor: "pointer", fontSize: 18}}>{link.text}</p>
                        <Issue variant="32x32_4"/>
                      </IconContainer>
                   
                  </div>
                )})}
              </Frame>
            </Frame>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
