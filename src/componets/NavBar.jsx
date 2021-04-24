import React from "react";
import classes from "./NavBar.module.css";
import { FaUser } from "react-icons/fa";

function NavBar({ isSignIn, onClick }) {
  return (
    <div className={classes.container}>
      <div></div>
      <div> smart cashier</div>
      {!isSignIn && <div></div>}
      {isSignIn && (
        <div className={classes.userIcon}>
          <FaUser onClick={onClick} />
        </div>
      )}
    </div>
  );
}

export default NavBar;
