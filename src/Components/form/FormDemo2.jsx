import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo2 = () => {

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

  // ✅ Validation JSON Object (Only required, minLength, maxLength)
  const validationRules = {
    name: {
      required: "Full Name is required",
      minLength: {
        value: 3,
        message: "Minimum 3 characters required"
      },
      maxLength: {
        value: 20,
        message: "Maximum 20 characters allowed"
      }
    },
    email: {
      required: "Email is required",
      minLength: {
        value: 5,
        message: "Minimum 5 characters required"
      },
      maxLength: {
        value: 30,
        message: "Maximum 30 characters allowed"
      }
    },
    course: {
      required: "Course is required"
    },
    year: {
      required: "Year is required"
    },
    skills: {
      required: "Select at least one skill"
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
      <h1>FormDemo2 - Student Registration</h1>

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



        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          {...register("email", validationRules.email)}
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>

        {/* Course */}
        <label>Course:</label><br />
        <select {...register("course", validationRules.course)}>
          <option value="">Select Course</option>
          <option value="BCA">BCA</option>
          <option value="BSC">BSC</option>
          <option value="BE">BE</option>
        </select>
        <p style={{ color: "red" }}>{errors.course?.message}</p>

        {/* Year */}
        <label>Year:</label><br />
        <input type="radio" value="1st" {...register("year", validationRules.year)} /> 1st
        <input type="radio" value="2nd" {...register("year")} /> 2nd
        <input type="radio" value="3rd" {...register("year")} /> 3rd
        <p style={{ color: "red" }}>{errors.year?.message}</p>

        {/* Skills */}
        <label>Skills:</label><br />
        <input type="checkbox" value="Java" {...register("skills", validationRules.skills)} /> Java
        <input type="checkbox" value="Python" {...register("skills")} /> Python
        <input type="checkbox" value="React" {...register("skills")} /> React
        <p style={{ color: "red" }}>{errors.skills?.message}</p>

        <br />
        <button type="submit">Register</button>
      </form>

      {isSubmitted && (
        <div>
          <h3>Output</h3>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>

          <p>Email: {data.email}</p>
          <p>Course: {data.course}</p>
          <p>Year: {data.year}</p>
          <p>Skills: {data.skills?.join(", ")}</p>
        </div>
      )}
    </div>
  );
};
