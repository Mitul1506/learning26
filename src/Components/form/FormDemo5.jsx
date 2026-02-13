import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo5 = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: "all" });

  const submitHandler = (data) => {
    console.log("Form Data:", data);
  };

  const validationSchema = {

    nameValidator: {
      required: {
        value: true,
        message: "Name is required*"
      },
      minLength: {
        value: 3,
        message: "Minimum 3 characters required*"
      },
      maxLength: {
        value: 20,
        message: "Maximum 20 characters allowed*"
      }
    },

    ageValidator: {
      required: {
        value: true,
        message: "Age is required*"
      },
      min: {
        value: 18,
        message: "Minimum age is 18*"
      },
      max: {
        value: 60,
        message: "Maximum age is 60*"
      }
    },

    emailValidator: {
      required: {
        value: true,
        message: "Email is required*"
      },
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email format*"
      }
    },

    contactValidator: {
      required: {
        value: true,
        message: "Contact is required*"
      },
      pattern: {
        value: /^[6-9]{1}[0-9]{9}$/,
        message: "Invalid contact number*"
      }
    },

    passwordValidator: {
      required: {
        value: true,
        message: "Password is required*"
      },
      minLength: {
        value: 6,
        message: "Minimum 6 characters required*"
      },
      validate: (value) => {
        return value.includes("@") || "Password must include @ symbol*";
      }
    },

    hobbiesValidator: {
      required: {
        value: true,
        message: "Select at least 2 hobbies*"
      },
      validate: (value) => {
        return value?.length >= 2 || "Minimum 2 hobbies required*";
      }
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>FormDemo5 - Complete Validation Example</h2>

      <form onSubmit={handleSubmit(submitHandler)}>

       
        <div>
          <label>Name:</label>
          <input type="text" {...register("name", validationSchema.nameValidator)} />
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </div>

        
        <div>
          <label>Age:</label>
          <input type="number" {...register("age", validationSchema.ageValidator)} />
          <p style={{ color: "red" }}>{errors.age?.message}</p>
        </div>

     
        <div>
          <label>Email:</label>
          <input type="text" {...register("email", validationSchema.emailValidator)} />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>

       
        <div>
          <label>Contact:</label>
          <input type="text" {...register("contact", validationSchema.contactValidator)} />
          <p style={{ color: "red" }}>{errors.contact?.message}</p>
        </div>

     
        <div>
          <label>Password:</label>
          <input type="password" {...register("password", validationSchema.passwordValidator)} />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

   
        <div>
          <label>Hobbies:</label><br />
          Cricket <input type="checkbox" value="cricket" {...register("hobbies", validationSchema.hobbiesValidator)} />
          Travel <input type="checkbox" value="travel" {...register("hobbies")} />
          Music <input type="checkbox" value="music" {...register("hobbies")} />
          <p style={{ color: "red" }}>{errors.hobbies?.message}</p>
        </div>

        <div>
          <input type="submit" />
        </div>

      </form>
    </div>
  );
};
