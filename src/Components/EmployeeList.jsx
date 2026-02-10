import React from "react";
import { SubEmployeeList } from "./SubEmployeeList";

export const EmployeeList = (props) => {
  console.log("EmployeeList props:", props);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{props.title}</h2>
      <h3>{props.company.name}</h3>
      <h4>{props.company.year}</h4>

      <SubEmployeeList
        employees={props.employees}
        tableTitle="Employee Details Table"
      />
    </div>
  );
};
