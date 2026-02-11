import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo3 = () => {

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = (formData) => {
    setData(formData);
    setIsSubmitted(true);
  };

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h1>FormDemo3 - Job Application</h1>

      <form onSubmit={handleSubmit(submitHandler)}>

        <input type="text" placeholder="Full Name" {...register("name")} /><br /><br />

        <input type="number" placeholder="Experience (years)" {...register("experience")} /><br /><br />

        <label>Department:</label><br />
        <select {...register("department")}>
          <option value="Developer">Developer</option>
          <option value="Tester">Tester</option>
          <option value="Manager">Manager</option>
        </select><br /><br />

        <label>Work Mode:</label><br />
        <input type="radio" value="Remote" {...register("mode")} /> Remote
        <input type="radio" value="Office" {...register("mode")} /> Office
        <br /><br />

        <label>Technologies:</label><br />
        <input type="checkbox" value="NodeJS" {...register("tech")} /> NodeJS
        <input type="checkbox" value="MongoDB" {...register("tech")} /> MongoDB
        <input type="checkbox" value="Spring Boot" {...register("tech")} /> Spring Boot
        <br /><br />

        <button type="submit">Apply</button>
      </form>

      {isSubmitted && (
        <div>
          <h3>Output</h3>
          <p>Name: {data.name}</p>
          <p>Experience: {data.experience} years</p>
          <p>Department: {data.department}</p>
          <p>Mode: {data.mode}</p>
          <p>Technologies: {data.tech?.join(", ")}</p>
        </div>
      )}
    </div>
  );
};
