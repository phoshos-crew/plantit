import Search from "./components/search";
import Details from "./components/details";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);



function App() {
  return (
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
        </BrowserRouter>
      </div>
  );
}

export default App;
