import BoxLayout from "../componets/BoxLayout";
import classes from "./NotificationPage.module.css";

import Button from "../componets/Button";

import { Link } from "react-router-dom";

export default function NotificationPage() {
  return (
    <div className={classes.container}>
      <BoxLayout>
        <div className={classes.boxContainer}>
          <div className={classes.heading}>
            <h1>Notification</h1>
          </div>
          <div className={classes.buttonContainer}>
            <div className={classes.button}>
              <Link to="#">
                <Button
                  style={{
                    background: "#202124",
                    color: "white",
                    fontSize: 25,
                  }}
                  title=" Email"
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
                title="SMS"
              />
            </div>
          </div>
        </div>
      </BoxLayout>
    </div>
  );
}
