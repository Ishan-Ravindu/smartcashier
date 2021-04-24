import BoxLayout from "../componets/BoxLayout";
import classes from "./StockPage.module.css";

export default function StockPage() {
  return (
    <div className={classes.container}>
      <BoxLayout>
        <h1 style={{ color: "white" }}>Stock page</h1>
      </BoxLayout>
    </div>
  );
}
