import React from "react";
import { EmployeeList } from "./EmployeeList";

export const Employees = () => {

  const title = "EMPLOYEE APP";

  const company = {
    name: "TCS",
    year: 2026
  };

  const employees = [
    { id: 101, name: "Parth", age: 23 },
    { id: 102, name: "Jay", age: 24 },
    { id: 103, name: "Raj", age: 25 },
    { id: 104, name: "Ajay", age: 23 }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employees</h1>

      <EmployeeList
        title={title}
        company={company}
        employees={employees}
      />
    </div>
  );
};
