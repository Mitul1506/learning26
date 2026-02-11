import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo4 = () => {

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = (formData) => {
    setData(formData);
    setIsSubmitted(true);
  };

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h1>FormDemo4 - Feedback</h1>

      <form onSubmit={handleSubmit(submitHandler)}>

        <input type="text" placeholder="Name" {...register("name")} /><br /><br />

        <input type="email" placeholder="Email" {...register("email")} /><br /><br />

        <label>Rating:</label><br />
        <select {...register("rating")}>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Average</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select><br /><br />

        <label>Recommend Us?</label><br />
        <input type="radio" value="Yes" {...register("recommend")} /> Yes
        <input type="radio" value="No" {...register("recommend")} /> No
        <br /><br />

        <label>Features Used:</label><br />
        <input type="checkbox" value="UI" {...register("features")} /> UI
        <input type="checkbox" value="Performance" {...register("features")} /> Performance
        <input type="checkbox" value="Support" {...register("features")} /> Support
        <br /><br />

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
