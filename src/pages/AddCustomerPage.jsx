import React from "react";
import BoxLayout from "../componets/BoxLayout";
import classes from "./AddCustomerPage.module.css";
import TextInput from "../componets/TextInput";
import { FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";
import Button from "../componets/Button";

export default function AddCustomerPage() {
  return (
    <div className={classes.container}>
      <BoxLayout>
        <div className={classes.heading}>
          <h1>Add Customer</h1>
        </div>
        <div className={classes.boxContainer}>
          <TextInput
            required
            // value={signUpUserPassword}
            // onChange={(event) => {
            //   setError("");
            //   setSignUpUserPassword(event.target.value);
            // }}
            icon={<FaUser />}
            // type="First Name"
            placeholder="First Name"
          />
          <TextInput
            required
            // value={signUpUserPassword}
            // onChange={(event) => {
            //   setError("");
            //   setSignUpUserPassword(event.target.value);
            // }}
            icon={<FaUser />}
            // type="Last Name"
            placeholder="Last Name"
          />
          <TextInput
            required
            // value={signUpUserPassword}
            // onChange={(event) => {
            //   setError("");
            //   setSignUpUserPassword(event.target.value);
            // }}
            icon={<FaBriefcase />}
            // type="Mobile Number"
            placeholder="Mobile Number"
          />
          <TextInput
            required
            // value={signUpUserPassword}
            // onChange={(event) => {
            //   setError("");
            //   setSignUpUserPassword(event.target.value);
            // }}
            icon={<FaUser />}
            // type="Email"
            placeholder="Email"
          />
          <TextInput
            required
            // value={signUpUserPassword}
            // onChange={(event) => {
            //   setError("");
            //   setSignUpUserPassword(event.target.value);
            // }}
            icon={<FaBriefcase />}
            // type="Address"
            placeholder="Address"
          />
          <TextInput
            required
            // value={signUpUserPassword}
            // onChange={(event) => {
            //   setError("");
            //   setSignUpUserPassword(event.target.value);
            // }}
            icon={<FaBriefcase />}
            // type="password"
            placeholder="Password"
          />
          <TextInput
            required
            // value={signUpUserPassword}
            // onChange={(event) => {
            //   setError("");
            //   setSignUpUserPassword(event.target.value);
            // }}
            icon={<FaBriefcase />}
            // type="Reenter password"
            placeholder="Reenter password"
          />
          <div className={classes.heading}>
            <Button title="Submit" />
          </div>
        </div>
      </BoxLayout>
    </div>
  );
}
