import axios from "axios";
import React from "react";
import cx from "classnames";
import styles from "../styles/Signin.module.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default Signin;

function Signin() {
  const [formValue, setformValue] = React.useState({
    username: "",
    password: "",
  });

  const [invalid, setInvalid] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: formValue.username,
      password: formValue.password,
    };
    console.log(userData);
    axios
      .post("http://localhost:8080/accounts/login", userData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        if (response.data.id != null) {
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("id", response.data.id);
          document.location.href = "/";
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <>
      <main className={cx(styles["form-signin"], "text-center", "mt-5")}>
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          {invalid && (
            <div class="mt-2 mb-2" role="alert">
              <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Invalid login!
              </div>
              <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-3 py-2 text-red-700">
                <p>Please try again.</p>
              </div>
            </div>
          )}
          <div className="form-floating">
            <input
              type="username"
              className="form-control"
              id="username"
              placeholder="username"
              value={formValue.username}
              onChange={(e) =>
                setformValue({ ...formValue, username: e.target.value })
              }
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
              value={formValue.password}
              onChange={(e) =>
                setformValue({ ...formValue, password: e.target.value })
              }
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className={cx(styles.checkbox, "mb-3")}>
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </>
  );
}
