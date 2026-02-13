import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo4 = () => {

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
      required: "Name is required",
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
    rating: {
      required: "Rating is required"
    },
    recommend: {
      required: "Please select Yes or No"
    },
    features: {
      required: "Select at least one feature"
    }
  };

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h1>FormDemo4 - Feedback</h1>

      <form onSubmit={handleSubmit(submitHandler)}>

        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          {...register("name", validationRules.name)}
        />
        <p style={{ color: "red" }}>{errors.name?.message}</p>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          {...register("email", validationRules.email)}
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>

        
        <label>Rating:</label><br />
        <select {...register("rating", validationRules.rating)}>
          <option value="">Select Rating</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Average</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>
        <p style={{ color: "red" }}>{errors.rating?.message}</p>

        {/* Recommend */}
        <label>Recommend Us?</label><br />
        <input type="radio" value="Yes" {...register("recommend", validationRules.recommend)} /> Yes
        <input type="radio" value="No" {...register("recommend")} /> No
        <p style={{ color: "red" }}>{errors.recommend?.message}</p>

        {/* Features */}
        <label>Features Used:</label><br />
        <input type="checkbox" value="UI" {...register("features", validationRules.features)} /> UI
        <input type="checkbox" value="Performance" {...register("features")} /> Performance
        <input type="checkbox" value="Support" {...register("features")} /> Support
        <p style={{ color: "red" }}>{errors.features?.message}</p>

        <br />
        <button type="submit">Submit Feedback</button>
      </form>

      {isSubmitted && (
        <div>
          <h3>Output</h3>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Rating: {data.rating}</p>
          <p>Recommend: {data.recommend}</p>
          <p>Features: {data.features?.join(", ")}</p>
        </div>
      )}
    </div>
  );
};
