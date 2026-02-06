import React, { useState } from "react";

export const UseStateDemo3 = () => {
  const [users, setUsers] = useState(["parth", "raj"]);
  const [name, setName] = useState("");

  const addUser = () => {
    if (name.trim() === "") return;
    setUsers(prev => [...prev, name]);
    setName("");
  };

  const removeLast = () => {
    setUsers(prev => prev.slice(0, -1));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>USE STATE DEMO 3</h1>

      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <button onClick={addUser}>Add</button>
      <button onClick={removeLast} style={{ marginLeft: "10px" }}>
        Remove Last
      </button>

      <ul>
        {users.map((u, index) => (
          <li key={index}>
            {index + 1}. {u}
          </li>
        ))}
      </ul>
    </div>
  );
};
