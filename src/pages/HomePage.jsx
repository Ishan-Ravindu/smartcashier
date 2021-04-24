import BoxLayout from "../componets/BoxLayout";
import classes from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={classes.container}>
      <BoxLayout>
        <h1 style={{ color: "white" }}>Home page</h1>
      </BoxLayout>
    </div>
  );
}

export default HomePage;
