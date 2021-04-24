import React, { useState } from "react";
import Button from "../componets/Button";
import RadioButton from "../componets/RadioButton";
import TabButton from "../componets/TabButton";
import TextInput from "../componets/TextInput";
import classes from "./LoginSignUpPage.module.css";

import { FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

function LoginSignUpPage({ handleLogin }) {
  const [signIn, setSignIn] = useState(true); //change sign in and sign up form
  const [signInUserName, setSignInUserName] = useState("");
  const [signInUserPassword, setSignInUserPassword] = useState("");
  const [radioButton, setRadioButton] = useState(false);
  const [signUpUserName, setSignUpUserName] = useState("");
  const [signUpUserPassword, setSignUpUserPassword] = useState("");
  const [signUpUserEmail, setSignUpUserEmail] = useState("");
  const [error, setError] = useState("");
  const [activityIndicator, setActivityIndicator] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setActivityIndicator(true);
    console.log({
      signInUserName,
      signInUserPassword,
      radioButton,
      signUpUserName,
      signUpUserPassword,
      signUpUserEmail,
    });
    setActivityIndicator(false);
    handleLogin();
    // setError("server side error");
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.centerBox}>
          <div className={classes.topButtonContainer}>
            <TabButton
              disabled={activityIndicator ? true : false}
              borderBottom={signIn}
              onClick={() => {
                setError("");
                setSignIn(true);
              }}
              title="sign in"
            />
            <TabButton
              disabled={activityIndicator ? true : false}
              borderBottom={!signIn}
              onClick={() => {
                setError("");
                setSignIn(false);
              }}
              title="sign up"
            />
          </div>
          <hr />

          {/* form here */}
          {signIn ? (
            <form onSubmit={handleSubmit} className={classes.inputContainer}>
              <TextInput
                required
                value={signInUserName}
                onChange={(event) => {
                  setError("");
                  setSignInUserName(event.target.value);
                }}
                icon={<FaUser />}
                type="text"
                placeholder="Your User Name"
              />
              <TextInput
                required
                value={signInUserPassword}
                onChange={(event) => {
                  setError("");
                  setSignInUserPassword(event.target.value);
                }}
                icon={<FaBriefcase />}
                type="password"
                placeholder="Your Password"
              />
              <RadioButton
                checked={radioButton}
                onClick={() => {
                  setError("");
                  setRadioButton(!radioButton);
                }}
                onChange={(event) => setRadioButton(!radioButton)}
                label="remember me"
              />
              <div className={classes.buttonContainer}>
                <Button
                  disabled={activityIndicator ? true : false}
                  type="submit"
                  value="Submit"
                  title="sign in"
                />
              </div>
              <div className={classes.loraderErrorContainer}>
                {activityIndicator && <div className={classes.loader}></div>}
                {error && !activityIndicator && (
                  <span className={classes.error}>{error}</span>
                )}
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className={classes.inputContainer}>
              <TextInput
                required
                value={signUpUserName}
                onChange={(event) => {
                  setError("");
                  setSignUpUserName(event.target.value);
                }}
                icon={<FaUser />}
                type="text"
                placeholder="Your User Name"
              />
              <TextInput
                required
                value={signUpUserEmail}
                onChange={(event) => {
                  setError("");
                  setSignUpUserEmail(event.target.value);
                }}
                icon={<FaEnvelope />}
                type="email"
                placeholder="Your Email"
              />
              <TextInput
                required
                value={signUpUserPassword}
                onChange={(event) => {
                  setError("");
                  setSignUpUserPassword(event.target.value);
                }}
                icon={<FaBriefcase />}
                type="password"
                placeholder="Your Password"
              />

              <div className={classes.buttonContainer}>
                <Button
                  disabled={activityIndicator ? true : false}
                  type="submit"
                  value="Submit"
                  title="sign up"
                />
              </div>
              <div className={classes.loraderErrorContainer}>
                {activityIndicator && <div className={classes.loader}></div>}
                {error && !activityIndicator && (
                  <span className={classes.error}>{error}</span>
                )}
              </div>
            </form>
          )}

          {/* form end here */}
        </div>
      </div>
    </>
  );
}

export default LoginSignUpPage;
