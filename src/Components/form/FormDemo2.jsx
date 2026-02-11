import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo2 = () => {

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = (formData) => {
    setData(formData);
    setIsSubmitted(true);
  };

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h1>FormDemo2 - Student Registration</h1>

      <form onSubmit={handleSubmit(submitHandler)}>

        <input type="text" placeholder="Full Name" {...register("name")} /><br /><br />

        <input type="email" placeholder="Email" {...register("email")} /><br /><br />

        <label>Course:</label><br />
        <select {...register("course")}>
          <option value="BCA">BCA</option>
          <option value="BSC">BSC</option>
          <option value="BE">BE</option>
        </select><br /><br />

        <label>Year:</label><br />
        <input type="radio" value="1st" {...register("year")} /> 1st
        <input type="radio" value="2nd" {...register("year")} /> 2nd
        <input type="radio" value="3rd" {...register("year")} /> 3rd
        <br /><br />

        <label>Skills:</label><br />
        <input type="checkbox" value="Java" {...register("skills")} /> Java
        <input type="checkbox" value="Python" {...register("skills")} /> Python
        <input type="checkbox" value="React" {...register("skills")} /> React
        <br /><br />

        <button type="submit">Register</button>
      </form>

      {isSubmitted && (
        <div>
          <h3>Output</h3>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Course: {data.course}</p>
          <p>Year: {data.year}</p>
          <p>Skills: {data.skills?.join(", ")}</p>
        </div>
      )}
    </div>
  );
};
