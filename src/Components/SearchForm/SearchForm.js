import React from "react";
import { useForm } from "react-hook-form";
import "./SearchForm.css";

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify("Issue is Created",data));
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1>Create an Issue</h1>
      </div>
      <label>Your Name</label>
      <input
        {...register("firstName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors?.firstName?.type === "required" && <p>This field is required</p>}
      {errors?.firstName?.type === "maxLength" && (
        <p> Name cannot exceed 20 characters</p>
      )}
      {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label>Issue</label>
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      {errors?.lastName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <input type="submit" />
    </form>
  );
};

export default SearchForm;
