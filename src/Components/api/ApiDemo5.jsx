import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export const ApiDemo5 = () => {

  const { register, handleSubmit, reset } = useForm();

  const submitHandler = async (data) => {
    try {

      console.log("Sending Data:", data);

      const res = await axios.post(
        "https://node5.onrender.com/user/user/",  
        data
      );

      console.log("Response:", res.data);
      alert("User Registered Successfully");

      reset();   // clear form

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>API DEMO 5 - POST REQUEST</h2>

      <form onSubmit={handleSubmit(submitHandler)}>

        <div>
          <label>Name:</label><br />
          <input
            type="text"
            {...register("name")}
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            {...register("email")}
          />
        </div>

        <div>
          <label>Age:</label><br />
          <input
            type="number"
            {...register("age")}
          />
        </div>

        <div>
          <label>Is Active:</label><br />
          <select {...register("isActive")}>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            {...register("password")}
          />
        </div>

        <br />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
};
