import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";
import Form from "./components/Form";

const Signup = () => {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({
    usernameError: "",
    emailError: "",
    passwordError: "",
    Password2Error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = () => {
    let usernameError = "";
    let emailError = "";
    let passwordError = "";
    let password2Error = "";

    if (!values.username) {
      usernameError = "name cannot be blank";
    }

    if (!values.email) {
      emailError = "please enter email address";
    } else if (!values.email.includes("@")) {
      emailError = "invalid email";
    }

    if (!values.password) {
      passwordError = "please enter password";
    } else if (values.password.length < 8) {
      passwordError = "password length minimum 8 characters";
    }

    if (!values.password2) {
      password2Error = "please confirm password";
    } else if (values.password2 !== values.password) {
      password2Error = "passwords do not match";
    }

    // if (emailError || usernameError) {
    //   setErrors({ emailError, usernameError });
    //   return false;
    // }
    // if (passwordError || password2Error) {
    //   setErrors({ passwordError, password2Error });
    //   return false;
    // }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      navigate("/");
    }
  };

  return (
    <div className="mt-[50px]">
      <div className="container flex justify-between items-center mx-auto">
        <div>
          <form onSubmit={handleSubmit} className="form">
            <Form
              htmlFor="username"
              id="username"
              name="username"
              label="Username"
              placeholder="Enter your username"
              type="text"
              value={values.username}
              onChange={handleChange}
            />
            <div style={{ fontSize: 16, color: "red" }}>
              {errors.usernameError}
            </div>
            <Form
              htmlFor="email"
              id="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            <div style={{ fontSize: 16, color: "red" }}>
              {errors.emailError}
            </div>
            <Form
              htmlFor="password"
              id="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            <div style={{ fontSize: 16, color: "red" }}>
              {errors.passwordError}
            </div>
            <Form
              htmlFor="password2"
              id="password2"
              name="password2"
              label="Confirm password"
              placeholder="Confirm"
              type="password"
              value={values.password2}
              onChange={handleChange}
            />
            <div style={{ fontSize: 16, color: "red" }}>
              {errors.password2Error}
            </div>
            <Button onSubmit={handleSubmit} label="Sign up" />
          </form>
        </div>
        <img
          className="rounded-[5px] max-h-[500px] max-w-[656px] ml-4"
          src="https://assets-global.website-files.com/5e39e095596498a8b9624af1/61f2f99094eed105dc885d81_Figma%20to%20Webflow%20Course.png"
          alt="cover image"
        />
      </div>
    </div>
  );
};

export default Signup;
