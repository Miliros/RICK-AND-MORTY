import React, { useState } from "react";
import styles from "./Form.module.css";
import { validation } from "./validation";
import logo from "../../../src/rick-login.jpg";

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
    <div className={styles.cntnForm}>
      <form className={styles.styleForm} onSubmit={handleSubmit}>
        <img className={styles.image} src={logo} alt="" />

        <div className={styles.ctnInputs}>
          <div className={styles.divLabel}>
            <label htmlFor="name">Username: </label>
            <p className={styles.error}>{errors.username}</p>
          </div>

          <input
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            className={styles.input}
            autoComplete="off"
          />

          <div className={styles.divLabel}>
            <label htmlFor="password">Password: </label>
            <p className={styles.error}>{errors.password}</p>
          </div>

          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={handleInputChange}
            className={styles.input}
            autoComplete="off"
          />
        </div>

        <button
          // style={{ marginTop: errors.password ? "10px" : "20px" }}
          className={styles.buttonForm}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}
