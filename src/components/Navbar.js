import * as React from "react";
import { TaskBar, List} from "@react95/core";
import { ReaderClosed, WindowsExplorer} from "@react95/icons"
import "@react95/icons/icons.css";
import { navigate } from "gatsby"

// markup
function NavBar(props) {
  return (
    <TaskBar
    list={
      <List onClick={() => navigate("/")}>
        <List.Item
          icon={<ReaderClosed variant="32x32_4" />}
        >
          Home
        </List.Item>
        <List.Item
          icon={<WindowsExplorer variant="32x32_4" />}
        >
          Windows Explorer
        </List.Item>
      </List>
    }
  />
  );
};

export default NavBar;
