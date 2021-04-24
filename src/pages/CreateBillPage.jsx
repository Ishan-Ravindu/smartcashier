import BoxLayout from "../componets/BoxLayout";
import classes from "./CreateBillPage.module.css";

function CreateBillPage() {
  return (
    <div className={classes.container}>
      <BoxLayout>
        <h1 style={{ color: "white" }}>CreateBill page</h1>
      </BoxLayout>
    </div>
  );
}

export default CreateBillPage;
