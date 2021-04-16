// In the switch component, route order matters. Because the switch will
// only display the first route that is matched to the url.
import React from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/utils";

//layouts
import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";

//pages
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import "./default.scss";

const initialState = {
  currentUser: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  authListener = null;
  componentDidMount() {
    this.authListener = auth.onAuthStateChanged((userAuth) => {
      if (!userAuth) return;
      this.setState({
        currentUser: userAuth,
      });
    });
  }
  componentWillUnmount() {
    this.authListener();
  }
  render() {
    const { currentUser } = this.state;

    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomepageLayout currentUser={currentUser}>
                <Homepage />
              </HomepageLayout>
            )}
          />
          <Route
            path="/registration"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <Registration />
              </MainLayout>
            )}
          />
          <Route
            path="/login"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <Login />
              </MainLayout>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
