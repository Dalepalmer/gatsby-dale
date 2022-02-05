import * as React from "react";
import { Frame, Tree, TitleBar } from "@react95/core";
import "@react95/icons/icons.css";
import NavBar from "../components/Navbar"
import { FileIcons } from "@react95/icons";
import { Bat, FileSettings } from "@react95/icons"


const pageStyles = {
  color: "#232129",
  backgroundColor: "#6fc9b0",
  padding: 30,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const treeNodes = [
    {
      children: [
        {children: [    
          {
            children: [
              {children: [
                {label: "The Oregon Outback", class:"link", onClick:() => {window.open("https://bikepacking.com/routes/oregon-outback/", '_blank')} },
              ], icon: <Bat />, id: "6a", label: "What I have done"},
              {children: [
                {label: "Crotia", id: "5a1", onClick:() => {window.open("https://bikepacking.com/routes/bikepacking-croatia/", '_blank')}},
                {label: "Central Oregon", id: "5a2", onClick:() => {window.open("https://bikepacking.com/routes/central-oregon-backcountry-explorer/", '_blank')}},
                {label: "Hart", id: "5a3", onClick:() => {window.open("https://bikepacking.com/routes/hart-sheldon-hot-springs/", '_blank')}},
              ], icon: <Bat />, id: "5a", label: "What I want to do"}
            ], icon: <FileSettings />, id: "4a", label: "Bike Touring"},
          {icon: <Bat />, id: "3a", label: "Bike Commuting"},
          {icon: <Bat />, id: "2a", label: "Mountain Biking"},
          {icon: <Bat />, id: "1a", label: "Bicycle Advocacy"}

        ], 
        icon: <Bat />, id: "0a", label: "Bikes"},
        {
          children: [    
            {icon: <FileSettings />, id: "3b", label: "Reusing old wood"},
            {icon: <Bat />, id: "2b", label: "Building practical things"},
            {icon: <Bat />, id: "1b", label: "Making Signs"}
  
          ],
          icon: <FileSettings />, id: "0b", label: "Woodworking"},
        {
          children: [    
            {icon: <FileSettings />, id: "5c", label: "Solar"},
            {icon: <Bat />, id: "4c", label: "Ranting about solar"},
            {icon: <Bat />, id: "3c", label: "Using the sun to power christmas lights"},
            {icon: <Bat />, id: "2c", label: "Energy Efficiency"},
            {icon: <Bat />, id: "1c", label: "LED Lightbulbs"}
          ],
          icon: <Bat />, id: "0c", label: "Sustainability"}
      ],
      id: 0,
      label: "Hobbies"
    },
];

// markup
const HobbiesPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <div>
        <TitleBar
          active
          icon={<FileIcons variant="32x32_4" />}
          title="Dale Palmer Jr - Hobbies"
          className="draggable"
          width={"100%"}
        >
          <TitleBar.OptionsBox>
            <TitleBar.Option>?</TitleBar.Option>
            <TitleBar.Option>X</TitleBar.Option>
          </TitleBar.OptionsBox>
        </TitleBar>
        <Frame style={{display: "flex"}} width="100%" height={500} padding={4}>
          <Frame width="100%" boxShadow="in" bg="white">
            <div style={{margin: 20, fontSize: 17}}>
              <Tree data={treeNodes} />
            </div>
          </Frame>
        </Frame>
      </div>
      <NavBar />
    </main>
  );
};

export default HobbiesPage;
