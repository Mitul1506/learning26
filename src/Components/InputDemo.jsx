import React, { useState } from "react";

export const InputDemo = () => {

  // JSON DATA
  const countryStateData = [
    {
      country: "India",
      states: ["Gujarat", "Maharashtra", "Rajasthan", "Delhi"]
    },
    {
      country: "USA",
      states: ["California", "Texas", "Florida", "New York"]
    },
    {
      country: "Canada",
      states: ["Ontario", "Quebec", "British Columbia"]
    }
  ];

  // STATES
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  const selectedCountry = countryStateData.find(
    (item) => item.country === country
  );

  const resetAll = () => {
    setName("");
    setAge("");
    setEmail("");
    setMobile("");
    setGender("");
    setCourse("");
    setCountry("");
    setState("");
    setShowOutput(false);
  };

  const containerStyle = {
    minHeight: "100vh",
    padding: "40px",
    backgroundColor: "#f4f6f8"
  };

  const mainBoxStyle = {
    display: "flex",
    gap: "30px",
    justifyContent: "center"
  };

  const boxStyle = {
    backgroundColor: "#fff",
    padding: "30px",
    width: "380px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  };

  const inputStyle = {
    width: "95%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "6px",
    border: "1px solid #ccc"
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "12px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" ,padding:20}}>
        Input Demo
      </h2>

      <div style={mainBoxStyle}>

        {/* INPUT AREA */}
        <div style={boxStyle}>
          <h3>Input Area</h3>

          <input style={inputStyle} placeholder="Name"
            value={name} onChange={(e) => setName(e.target.value)} />

          <input style={inputStyle} placeholder="Age"
            value={age} onChange={(e) => setAge(e.target.value)} />

          <input style={inputStyle} placeholder="Email"
            value={email} onChange={(e) => setEmail(e.target.value)} />

          <input style={inputStyle} placeholder="Mobile"
            value={mobile} onChange={(e) => setMobile(e.target.value)} />

          {/* Gender Radio */}
          <div style={{ marginTop: "10px" }}>
            <b>Gender:</b><br />
            <input type="radio" name="gender" value="Male"
              onChange={(e) => setGender(e.target.value)} /> Male &nbsp;
            <input type="radio" name="gender" value="Female"
              onChange={(e) => setGender(e.target.value)} /> Female
          </div>

          {/* Course */}
          <select style={inputStyle}
            value={course}
            onChange={(e) => setCourse(e.target.value)}>
            <option value="">Select Course</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="MCA">MCA</option>
          </select>

          {/* Country */}
          <select
            style={inputStyle}
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              setState("");
            }}
          >
            <option value="">Select Country</option>
            {countryStateData.map((item, index) => (
              <option key={index} value={item.country}>
                {item.country}
              </option>
            ))}
          </select>

          {/* State (Dependent) */}
          <select
            style={inputStyle}
            value={state}
            disabled={!country}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">Select State</option>
            {selectedCountry &&
              selectedCountry.states.map((st, index) => (
                <option key={index} value={st}>
                  {st}
                </option>
              ))}
          </select>

          <button
            style={buttonStyle}
            onClick={() => setShowOutput(true)}
          >
            Show Output
          </button>

          <button
            style={{ ...buttonStyle, backgroundColor: "#e74c3c" }}
            onClick={resetAll}
          >
            Reset All
          </button>
        </div>

        {/* OUTPUT AREA */}
        {showOutput && (
          <div style={boxStyle}>
            <h3>Display Area</h3>
            <p><b>Name:</b> {name}</p>
            <p><b>Age:</b> {age}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Mobile:</b> {mobile}</p>
            <p><b>Gender:</b> {gender}</p>
            <p><b>Course:</b> {course}</p>
            <p><b>Country:</b> {country}</p>
            <p><b>State:</b> {state}</p>
          </div>
        )}

      </div>
    </div>
  );
};
