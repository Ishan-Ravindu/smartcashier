import React from "react";
import classes from "./NavBarLinks.module.css";
import CustomLink from "./CustomLink";

function NavBarLinks({ selected = true }) {
  return (
    <div className={classes.container}>
      <CustomLink to="/home" activeOnlyWhenExact={true} label="Home" />
      <CustomLink to="/customer" activeOnlyWhenExact={true} label="customer" />
      <CustomLink to="/stock" activeOnlyWhenExact={true} label="stock" />
      <CustomLink
        to="/notification"
        activeOnlyWhenExact={true}
        label="notification"
      />
      <CustomLink to="/supplier" activeOnlyWhenExact={true} label="supplier" />
      <CustomLink
        to="/create-bill"
        activeOnlyWhenExact={true}
        label="create-bill"
      />
    </div>
  );
}

export default NavBarLinks;
