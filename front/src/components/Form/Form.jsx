import React, { useState } from "react";
import styles from "./Form.module.css";
import { validation } from "./validation";

export default function Form(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleInputChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div>
      <form className={styles.styleForm} onSubmit={handleSubmit}>
        <label htmlFor="name">Username:</label>
        <input
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <p className={errors.username && styles.error}>{errors.username}</p>
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <p className={errors.password && styles.error}>{errors.password}</p>
        <button className={styles.buttonForm}>LOGIN</button>
      </form>
    </div>
  );
}
