import { useState, useEffect } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registeredMessage, setLoggedInMessage] = useState("");
  const [registered, setLoggedIn] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordValidator = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (email === "") {
      setEmailError("");
    } else if (!emailValidator.test(email)) {
      setEmailError("Please enter a valid email address!");
    } else {
      setEmailError("");
    }

    if (password === "") {
      setPasswordError("");
    } else if (
      !/^[0-9]+$/.test(password) &&
      !passwordValidator.test(password)
    ) {
      setPasswordError("Please enter mininum 8 characters and secure!");
    } else {
      setPasswordError("");
    }
  }, [email, emailError, password, passwordError]);

  function login() {
    if (
      email !== "" &&
      password !== "" &&
      emailError === "" &&
      passwordError === ""
    ) {
      setLoggedIn(true);

      setLoggedInMessage("Logging In");
      setTimeout(() => setLoggedInMessage("Logging In."), 1000);
      setTimeout(() => setLoggedInMessage("Logging In.."), 2000);
      setTimeout(() => setLoggedInMessage("Logging In..."), 3000);
      setTimeout(
        () => setLoggedInMessage("You have successfully logged in!"),
        4000
      );
    }
  }

  return registered ? (
    <h1>{registeredMessage}</h1>
  ) : (
    <form style={{ maxWidth: "720px", margin: "auto", textAlign: "justify" }}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={(event) => setEmail(event.target.value)}
        />
        {emailError !== "" && (
          <small id="emailHelp" className="form-text text-danger">
            {emailError}
          </small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        {passwordError !== "" && (
          <small id="passwordHelp" className="form-text text-danger">
            {passwordError}
          </small>
        )}
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-submit"
        onClick={(event) => {
          event.preventDefault();

          login();
        }}
        onSubmit={(event) => event.preventDefault()}
      >
        Submit
      </button>
    </form>
  );
}

export default Login;
