import React from "react";
import { useForm } from "react-hook-form";

export const FormWatch = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({ mode: "onChange" });

  const password = watch("password", "");

  const validationSchema = {
    passwordValidator: {
      required: {
        value: true,
        message: "Password is required*"
      }
    },
    confirmPasswordValidator: {
      required: {
        value: true,
        message: "Confirm password is required*"
      },
      validate: (value) => {
        return value === password || "Password not matched*";
      }
    }
  };

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div style={{ textAlign: "center" ,padding:50}}>
      <h2>Simple Watch Password Demo</h2>

      <form onSubmit={handleSubmit(submitHandler)}>

      
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", validationSchema.passwordValidator)}
          />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

       
        <div>

          <p style={{ color: /[A-Z]/.test(password) ? "green" : "black" }}>
            1 Capital Letter
          </p>

          <p style={{ color: /[a-z]/.test(password) ? "green" : "black" }}>
            1 Small Letter
          </p>

          <p style={{ color: /[0-9]/.test(password) ? "green" : "black" }}>
            1 Digit
          </p>

          <p style={{ color: /[^A-Za-z0-9]/.test(password) ? "green" : "black" }}>
            1 Special Character
          </p>

          <p style={{ color: password.length >= 8 ? "green" : "black" }}>
            Minimum 8 Characters
          </p>

        </div>

        
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", validationSchema.confirmPasswordValidator)}
          />
          <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
        </div>

        <div>
          <input type="submit" />
        </div>

      </form>
    </div>
  );
};
