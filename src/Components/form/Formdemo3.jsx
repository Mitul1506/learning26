import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo3 = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [data, setData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = (formData) => {
    setData(formData);
    setIsSubmitted(true);
  };

 
  const validationRules = {
    name: {
      required: "Full Name is required",
      minLength: {
        value: 3,
        message: "Minimum 3 characters required"
      },
      maxLength: {
        value: 25,
        message: "Maximum 25 characters allowed"
      }
    },
    experience: {
      required: "Experience is required",
      minLength: {
        value: 1,
        message: "Minimum 1 digit required"
      },
      maxLength: {
        value: 2,
        message: "Maximum 2 digits allowed"
      }
    },
    department: {
      required: "Department is required"
    },
    mode: {
      required: "Work mode is required"
    },
    tech: {
      required: "Select at least one technology"
    },

    age: {
  required: "Age is required",
  minLength: {
    value: 2,
    message: "Minimum age is 18"
  },
  maxLength: {
    value: 2,
    message: "Maximum age is 60"
  }
}
  };

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h1>FormDemo3 - Job Application</h1>

      <form onSubmit={handleSubmit(submitHandler)}>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          {...register("name", validationRules.name)}
        />
        <p style={{ color: "red" }}>{errors.name?.message}</p>
        {/* Age */}
<input
  type="number"
  placeholder="Age"
  min="18"
  max="60"
  {...register("age", validationRules.age)}
/>
<p style={{ color: "red" }}>{errors.age?.message}</p>

        {/* Experience */}
        <input
          type="number"
          placeholder="Experience (years)"
          {...register("experience", validationRules.experience)}
        />
        <p style={{ color: "red" }}>{errors.experience?.message}</p>

        {/* Department */}
        <label>Department:</label><br />
        <select {...register("department", validationRules.department)}>
          <option value="">Select Department</option>
          <option value="Developer">Developer</option>
          <option value="Tester">Tester</option>
          <option value="Manager">Manager</option>
        </select>
        <p style={{ color: "red" }}>{errors.department?.message}</p>

        {/* Work Mode */}
        <label>Work Mode:</label><br />
        <input type="radio" value="Remote" {...register("mode", validationRules.mode)} /> Remote
        <input type="radio" value="Office" {...register("mode")} /> Office
        <p style={{ color: "red" }}>{errors.mode?.message}</p>

        {/* Technologies */}
        <label>Technologies:</label><br />
        <input type="checkbox" value="NodeJS" {...register("tech", validationRules.tech)} /> NodeJS
        <input type="checkbox" value="MongoDB" {...register("tech")} /> MongoDB
        <input type="checkbox" value="Spring Boot" {...register("tech")} /> Spring Boot
        <p style={{ color: "red" }}>{errors.tech?.message}</p>

        <br />
        <button type="submit">Apply</button>
      </form>

      {isSubmitted && (
        <div>
          <h3>Output</h3>
          <p>Name: {data.name}</p>
           <p>Age: {data.age}</p>
          <p>Experience: {data.experience} years</p>
          <p>Department: {data.department}</p>
          <p>Mode: {data.mode}</p>
          <p>Technologies: {data.tech?.join(", ")}</p>
        </div>
      )}
    </div>
  );
};
