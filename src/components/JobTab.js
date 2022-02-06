import * as React from "react";
import { Fieldset, } from "@react95/core";
import "@react95/icons/icons.css";

// markup
function JobTab(props) {
  const job = props.job
  return (
    <div>
      <Fieldset legend="Job Title" style={{ marginBottom: "1em" }}>
        <h2>{job.title}</h2>
      </Fieldset>
      <Fieldset
        legend="Languages & Tooling"
        style={{ marginBottom: "1em" }}
      >
        <ul>
          {job.tools.split(",").map((x, index) => { return (
            <li key={index}>{x}</li>
          )})}
        </ul>
      </Fieldset>
    </div>
  );
};

export default JobTab;
