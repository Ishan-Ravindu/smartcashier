import BoxLayout from "../componets/BoxLayout";
import classes from "./CustomerPage.module.css";

export default function CustomerPage() {
  return (
    <div className={classes.container}>
      <BoxLayout>
        <h1 style={{ color: "white" }}>Customer Page</h1>
      </BoxLayout>
    </div>
  );
}
