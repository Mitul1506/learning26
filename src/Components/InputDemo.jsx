import React, { useState } from "react";

export const InputDemo = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");

  const resetAll = () => {
    setName("");
    setAge("");
    setEmail("");
    setPassword("");
    setMobile("");
    setAddress("");
    setCity("");
    setState("");
    setGender("");
    setCourse("");
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

  const inputBoxStyle = {
    backgroundColor: "#fff",
    padding: "30px",
    width: "400px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  };

  const outputBoxStyle = {
    backgroundColor: "#fff",
    padding: "30px",
    width: "350px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  };

  const inputStyle = {
    width: "95%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px"
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "15px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px"
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Input Demo (useState & onChange)
      </h2>

      <div style={mainBoxStyle}>

        {/* Input Section */}
        <div style={inputBoxStyle}>
          <h3>Input Area</h3>

          <input style={inputStyle} placeholder="Name"
            onChange={(e) => setName(e.target.value)} value={name} />

          <input style={inputStyle} placeholder="Age"
            onChange={(e) => setAge(e.target.value)} value={age} />

          <input style={inputStyle} placeholder="Email"
            onChange={(e) => setEmail(e.target.value)} value={email} />

          <input style={inputStyle} placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} value={password} />

          <input style={inputStyle} placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)} value={mobile} />

          <input style={inputStyle} placeholder="Address"
            onChange={(e) => setAddress(e.target.value)} value={address} />

          <input style={inputStyle} placeholder="City"
            onChange={(e) => setCity(e.target.value)} value={city} />

          <input style={inputStyle} placeholder="State"
            onChange={(e) => setState(e.target.value)} value={state} />

          <input style={inputStyle} placeholder="Gender"
            onChange={(e) => setGender(e.target.value)} value={gender} />

          <input style={inputStyle} placeholder="Course"
            onChange={(e) => setCourse(e.target.value)} value={course} />

          <button style={buttonStyle} onClick={resetAll}>
            Reset All
          </button>
        </div>

        {/* Output Section */}
        <div style={outputBoxStyle}>
          <h3>Display Area</h3>
          <p><b>Name:</b> {name}</p>
          <p><b>Age:</b> {age}</p>
          <p><b>Email:</b> {email}</p>
          <p><b>Password:</b> {password}</p>
          <p><b>Mobile:</b> {mobile}</p>
          <p><b>Address:</b> {address}</p>
          <p><b>City:</b> {city}</p>
          <p><b>State:</b> {state}</p>
          <p><b>Gender:</b> {gender}</p>
          <p><b>Course:</b> {course}</p>
        </div>

      </div>
    </div>
  );
};
