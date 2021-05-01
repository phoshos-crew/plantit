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
import cropReducer from "./reducers/crop-reducer";
import {Provider} from "react-redux";

import FeedPage from "./components/feed-page/feed-page";
import LoginPage from "./components/login/login-page";
import RegisterPage from "./components/register/register-page";
import Profile from "./components/profile";
import ProfileAnon from "./components/profile-anon";
import commentsReducer from "./reducers/comments-reducer";
import TopBar from "./components/top-bar/top-bar";
import AdminPage from "./components/admin/admin"
import GroupPage from "./components/group/group-page";



library.add(fab, fas);

const reducer = combineReducers({
    userReducer: userReducer,
    postsReducer: postsReducer,
    commentsReducer: commentsReducer,
    cropReducer: cropReducer
})

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
    return (
        <Provider store={store}>
            <div className="container-fluid">
                <BrowserRouter>
                    <TopBar/>
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
                        path={["/profile"]}>
                        <Profile/>
                    </Route>
                    <Route
                        exact={true}
                        path={["/profile/:userId"]}>
                        <ProfileAnon/>
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
                    <Route
                        exact={true}
                        path={[
                            "/admin",
                            "/admin/:contentType",
                            "/admin/:contentType/:contentId"
                        ]}>
                        <AdminPage/>
                    </Route>
                    <Route
                        exact={true}
                        path={["/group", "/group/:groupId"]}>
                        <GroupPage/>
                    </Route>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
