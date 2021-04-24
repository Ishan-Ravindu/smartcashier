import BoxLayout from "../componets/BoxLayout";
import classes from "./SupplierPage.module.css";

export default function SupplierPage() {
  return (
    <div className={classes.container}>
      <BoxLayout>
        <h1 style={{ color: "white" }}>Supplier page</h1>
      </BoxLayout>
    </div>
  );
}
