import React from "react";

export const SubEmployeeList = (props) => {
  console.log("SubEmployeeList props:", props);

  return (
    <div>
      <h3>{props.tableTitle}</h3>

      <table border="1" align="center">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
        </thead>

        <tbody>
          {
            props.employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
