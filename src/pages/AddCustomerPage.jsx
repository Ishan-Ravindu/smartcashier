import React from "react";
import BoxLayout from "../componets/BoxLayout";
import classes from "./AddCustomerPage.module.css";
import TextInput from "../componets/TextInput";
import {
  FaUser,
  FaBriefcase,
  FaArrowCircleLeft,
  FaPhoneAlt,
  FaMailBulk,
  FaHome,
} from "react-icons/fa";
import Button from "../componets/Button";
import { Link } from "react-router-dom";

export default function AddCustomerPage() {
  return (
    <div className={classes.container}>
      <BoxLayout>
        <div className={classes.backButton}>
          <Link to="/customer">
            <FaArrowCircleLeft color="white" size={25} />
          </Link>
        </div>
        <div className={classes.heading}>
          <span>Add Customer</span>
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
            icon={<FaPhoneAlt />}
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
            icon={<FaMailBulk />}
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
            icon={<FaHome />}
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
