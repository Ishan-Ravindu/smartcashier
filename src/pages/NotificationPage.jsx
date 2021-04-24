import BoxLayout from "../componets/BoxLayout";
import classes from "./NotificationPage.module.css";

export default function NotificationPage() {
  return (
    <div className={classes.container}>
      <BoxLayout>
        <h1 style={{ color: "white" }}>Notification page</h1>
      </BoxLayout>
    </div>
  );
}
