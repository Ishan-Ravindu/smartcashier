import BoxLayout from "../componets/BoxLayout";
import Button from "../componets/Button";
import classes from "./CustomerPage.module.css";
import { useRouteMatch, Link } from "react-router-dom";

export default function CustomerPage() {
  return (
    <div className={classes.container}>
      <BoxLayout>
        <div className={classes.boxContainer}>
          <div className={classes.heading}>
            <h1>Customer</h1>
          </div>
          <div className={classes.buttonContainer}>
            <div className={classes.button}>
              <Link to="/customer/add-customer">
                <Button
                  style={{
                    background: "#202124",
                    color: "white",
                    fontSize: 25,
                  }}
                  title=" Add Customer"
                />
              </Link>
            </div>
            <div className={classes.button}>
              <Button
                style={{
                  background: "#202124",
                  color: "white",
                  fontSize: 25,
                }}
                title="Customer Details"
              />
            </div>
          </div>
        </div>
      </BoxLayout>
    </div>
  );
}
