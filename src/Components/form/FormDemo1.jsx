import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo1 = () => {

  const { register, handleSubmit } = useForm();
  const [userData, setUserData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = (data) => {
    console.log(data);
    setUserData(data);
    setIsSubmitted(true);
  };

  return (
    <div style={{textAlign:"center",padding:50}}>
      <h1>FormDemo1</h1>

      <form onSubmit={handleSubmit(submitHandler)}>

        {/* Name */}
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            placeholder="Enter name"
            {...register("firstName")}
          />
        </div>

        <br />

        {/* Age */}
        <div>
          <label>Age:</label><br />
          <input
            type="text"
            placeholder="Enter age"
            {...register("age")}
          />
        </div>

        <br />

        {/* Gender */}
        <div>
          <label>Gender:</label><br />
          <input
            type="radio"
            value="Male"
            {...register("gender")}
          /> Male
          <br />
          <input
            type="radio"
            value="Female"
            {...register("gender")}
          /> Female
        </div>

        <br />

        {/* Hobbies */}
        <div>
          <label>Hobbies:</label><br />
          <input
            type="checkbox"
            value="Cricket"
            {...register("hobbies")}
          /> Cricket
          <br />
          <input
            type="checkbox"
            value="Travel"
            {...register("hobbies")}
          /> Travel
          <br />
          <input
            type="checkbox"
            value="Scrolling"
            {...register("hobbies")}
          /> Scrolling
        </div>

        <br />

        {/* Submit */}
        <div>
          <input type="submit" value="Submit" />
        </div>

      </form>

      <br />

      {/* Output */}
      {isSubmitted && (
        <div>
          <h2>Output</h2>
          <p>Name: {userData.firstName}</p>
          <p>Age: {userData.age}</p>
          <p>Gender: {userData.gender}</p>
          <p>Hobbies: {userData.hobbies?.join(", ")}</p>
        </div>
      )}
    </div>
  );
};
