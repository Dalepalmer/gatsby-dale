import * as React from "react";
import { TitleBar} from "@react95/core";
import { FileIcons} from "@react95/icons"
import "@react95/icons/icons.css";

// markup
function PageTitle(props) {
  function toggleBox() {
    var elem = document.querySelector(`[data-hide*="me"]`)
    if (elem) {
      if (elem.style.maxHeight === '') {
        elem.style.maxHeight = '0px'
      } else {
        elem.style.maxHeight = ''
      }
    }
  }
  return (
    <TitleBar
          active
          icon={<FileIcons variant="32x32_4" />}
          title={props.title}
          className="draggable"
          width={"100%"}
        >
          <TitleBar.OptionsBox>
            <TitleBar.Option>?</TitleBar.Option>
            <TitleBar.Option onClick={toggleBox} >—</TitleBar.Option>
          </TitleBar.OptionsBox>
        </TitleBar>
  );
};

export default PageTitle;
