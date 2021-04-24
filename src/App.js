import {BrowserRouter, Route} from "react-router-dom";

import Search from "./components/search";
import Details from "./components/details";
import Home from "./components/Home";

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons'

import {combineReducers, createStore} from "redux";
import userReducer from "./reducers/user-reducer";
import postsReducer from "./reducers/posts-reducer";
import {Provider} from "react-redux";

import FeedPage from "./components/feed-page/feed-page";
import LoginPage from "./components/login/login-page";
import RegisterPage from "./components/register/register-page";
import Profile from "./components/profile";



library.add(fab, fas);

const reducer = combineReducers({
    userReducer: userReducer,
    postsReducer: postsReducer
})

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <BrowserRouter>
          <Route
              exact={true}
              path={["/"]}>
            <Home/>
          </Route>
          <Route
              exact={true}
              path={["/search", "/search/:cropName"]}>
            <Search/>
          </Route>
          <Route
              exact={true}
              path={["/details/:cropId"]}>
            <Details/>
          </Route>
          <Route
              exact={true}
              path={["/profile", "/profile/userid"]}>
            <Profile/>
          </Route>
            <Route
                exact={true}
                path={["/login"]}>
                <LoginPage/>
            </Route>
            <Route
                exact={true}
                path={["/register"]}>
                <RegisterPage/>
            </Route>
            <Route
                exact={true}
                path={["/feed"]}>
                <FeedPage/>
            </Route>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
