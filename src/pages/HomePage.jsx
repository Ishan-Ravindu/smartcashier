import BoxLayout from "../componets/BoxLayout";
import classes from "./HomePage.module.css";
import Button from "../componets/Button";

function HomePage() {
  return (
    <div className={classes.container}>
      <BoxLayout>
        <div className={classes.boxContainer}>
          <div className={classes.heading}>
            <h1>One Cafe Restaurant</h1>
          </div>
          <div className={classes.buttonContainer}>
            <div className={classes.leftColumn}>
              <div className={classes.button}>
                <Button
                  style={{
                    height: 50,
                    width: 200,
                    background: "#202124",
                    color: "white",
                    fontSize: 25,
                  }}
                  title="Create Bill"
                />
              </div>
              <div className={classes.button}>
                <Button
                  style={{
                    height: 50,
                    width: 200,
                    background: "#202124",
                    color: "white",
                    fontSize: 25,
                  }}
                  title="Inventory"
                />
              </div>
              <div className={classes.button}>
                <Button
                  style={{
                    height: 50,
                    width: 200,
                    background: "#202124",
                    color: "white",
                    fontSize: 25,
                  }}
                  title="Customer"
                />
              </div>
            </div>
            <div className={classes.rightColumn}>
              <div className={classes.button}>
                <Button
                  style={{
                    height: 50,
                    width: 200,
                    background: "#202124",
                    color: "white",
                    fontSize: 25,
                  }}
                  title="Supplier"
                />
              </div>
              <div className={classes.button}>
                <Button
                  style={{
                    height: 50,
                    width: 200,
                    background: "#202124",
                    color: "white",
                    fontSize: 25,
                  }}
                  title="Chef"
                />
              </div>
              <div className={classes.button}>
                <Button
                  style={{
                    height: 50,
                    width: 200,
                    background: "#202124",
                    color: "white",
                    fontSize: 25,
                  }}
                  title="Supplier"
                />
              </div>
            </div>
          </div>
        </div>
      </BoxLayout>
    </div>
  );
}

export default HomePage;
