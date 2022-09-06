import axios from "axios";
import React from "react";

export default function Signin() {
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
    <section class="bg-gray-50 dark:bg-white-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      {invalid && (
        <div class="mt-2 mb-2" role="alert">
          <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Invalid username and/or password!
          </div>
          <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-3 py-2 text-red-700">
            <p>Please try again.</p>
          </div>
        </div>
      )}
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Login
          </h1>
          <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                for="username"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="MOCNewsReader"
                required=""
                onChange={(e) =>
                  setformValue({ ...formValue, username: e.target.value })
                }
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="true"
                onChange={(e) =>
                  setformValue({ ...formValue, password: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Login
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Want to return?{" "}
                <a
                  href="/"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Home
                </a>
              </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
}
