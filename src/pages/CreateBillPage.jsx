import BoxLayout from "../componets/BoxLayout";
import classes from "./CreateBillPage.module.css";
import TextInput from "../componets/TextInput";
import Button from "../componets/Button";
import { FaShoppingCart, FaDollarSign, FaClipboardList } from "react-icons/fa";

function CreateBillPage() {
  return (
    <div className={classes.container}>
      <BoxLayout>
        <div className={classes.heading}>
          <h1>Create Bill</h1>
        </div>
        <div className={classes.boxContainer}>
          <TextInput
            required
            // value={signUpUserPassword}
            // onChange={(event) => {
            //   setError("");
            //   setSignUpUserPassword(event.target.value);
            // }}
            icon={<FaShoppingCart />}
            // type="First Name"
            placeholder="Item Name"
          />
          <TextInput
            required
            // value={signUpUserPassword}
            // onChange={(event) => {
            //   setError("");
            //   setSignUpUserPassword(event.target.value);
            // }}
            icon={<FaDollarSign />}
            // type="Last Name"
            placeholder="Price"
          />
          <TextInput
            required
            // value={signUpUserPassword}
            // onChange={(event) => {
            //   setError("");
            //   setSignUpUserPassword(event.target.value);
            // }}
            icon={<FaClipboardList />}
            // type="Mobile Number"
            placeholder="Quantity"
          />

          <div className={classes.heading}>
            <Button title="Submit" />
          </div>
        </div>
      </BoxLayout>
    </div>
  );
}

export default CreateBillPage;
