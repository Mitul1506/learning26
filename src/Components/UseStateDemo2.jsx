import React, { useState } from "react";

export const UseStateDemo2 = () => {
  const [loading, setLoading] = useState(true);

  const toggleLoader = () => {
    setLoading(prev => !prev);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>USE STATE DEMO 2</h1>

      {loading && <h2>Loading....</h2>}
      {!loading && <h2>Data Loaded ✅</h2>}

      <button onClick={toggleLoader}>
        {loading ? "STOP" : "START"}
      </button>
    </div>
  );
};
