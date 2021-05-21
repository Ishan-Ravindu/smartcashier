import BoxLayout from "../componets/BoxLayout";
import Button from "../componets/Button";
import { useRouteMatch, Link } from "react-router-dom";
import classes from "./SupplierPage.module.css";

export default function SupplierPage() {
  return (
    <div className={classes.container}>
      <BoxLayout>
        <div className={classes.boxContainer}>
          <div className={classes.heading}>
            <h1>Supplier</h1>
          </div>
          <div className={classes.buttonContainer}>
            <div className={classes.button}>
              <Link to="/supplier/add-supplier">
                <Button
                  style={{
                    background: "#202124",
                    color: "white",
                    fontSize: 25,
                  }}
                  title=" Add Supplier"
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
                title="Supplier Details"
              />
            </div>
          </div>
        </div>
      </BoxLayout>
    </div>
  );
}
