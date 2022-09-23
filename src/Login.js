import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Form from "./components/Form";

const Login = () => {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    usernameError: "",
    passwordError: "",
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
    let passwordError = "";

    if (!values.username) {
      usernameError = "name cannot be blank";
    }
    if (!values.password) {
      passwordError = "please enter password";
    } else if (values.password.length < 8) {
      passwordError = "password length minimum 8 characters";
    }
    // if (passwordError || usernameError) {
    //   setErrors({ passwordError,usernameError });
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
    <div>
      <div className="mt-[50px] mb-[50px]">
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
              <Button onClick={handleSubmit} label="Sign in" />
            </form>
          </div>
          <img
            className="rounded-[5px] max-h-[500px] max-w-[656px] ml-4"
            src="https://assets-global.website-files.com/5e39e095596498a8b9624af1/61f2f99094eed105dc885d81_Figma%20to%20Webflow%20Course.png"
            alt="cover image"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
