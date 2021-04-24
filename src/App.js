import { useState } from "react";
import NavBar from "./componets/NavBar";
import NavBarLinks from "./componets/NavBarLinks";
import LoginSignUpPage from "./pages/LoginSignUpPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CustomerPage from "./pages/CustomerPage";
import StockPage from "./pages/StockPage";
import NotificationPage from "./pages/NotificationPage";
import SupplierPage from "./pages/SupplierPage";
import CreateBillPage from "./pages/CreateBillPage";
import Page404 from "./pages/404Page";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <NavBar isSignIn={isLogin} onClick={() => setIsLogin(false)} />
      {!isLogin && <LoginSignUpPage handleLogin={() => setIsLogin(true)} />}

      {isLogin && (
        <>
          <Router>
            <NavBarLinks />
            <div>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/customer">
                  <CustomerPage />
                </Route>
                <Route path="/stock">
                  <StockPage />
                </Route>
                <Route path="/notification">
                  <NotificationPage />
                </Route>
                <Route path="/supplier">
                  <SupplierPage />
                </Route>
                <Route path="/create-bill">
                  <CreateBillPage />
                </Route>
                <Route path="*">
                  <Page404 />
                </Route>
              </Switch>
            </div>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
