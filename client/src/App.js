import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import CheckoutPage from "./pages/checkout/checkout.component.jsx";

import SignInAndSignUpPage from "././pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.action";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  /*

  componentDidMount() {
    checkUserSession();

    console.log(this.props);
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // console.log({ userAuth });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
        //* We did that to programmatically set the data to the firebase, so we don't want to manually
        //* input the data to the firestore
        
        addCollectionAndDocuments(
          "collections",
          collectionsArray.map(({ title, items }) => ({ title, items }))
        );
        
      }
    });
  }
  */
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route exact path="/checkout" component={CheckoutPage}></Route>
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
