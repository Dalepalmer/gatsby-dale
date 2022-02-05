import * as React from "react";
import { Fieldset, } from "@react95/core";
import "@react95/icons/icons.css";

// markup
function JobTab(props) {
  return (
    <div>
      <Fieldset legend="Job Title" style={{ marginBottom: "1em" }}></Fieldset>
        <h2>{props.jobTitle}</h2>
      <Fieldset
        legend="Languages & Tooling"
        style={{ marginBottom: "1em" }}
      >
        <p>{props.tools}</p>
      </Fieldset>
      <Fieldset
        legend="Responsibilities"
        style={{ marginBottom: "1em" }}
      >
        <p>{props.tools}</p>
      </Fieldset>
    </div>
  );
};

export default JobTab;
