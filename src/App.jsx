import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";
import Drivers from "./components/Drivers";
import Form from "./components/Form";
import CharriotPage from "./components/CharriotPage";

import { getProfiles } from "./api/apiCall";
import { Switch, Route } from "react-router-dom";

function App() {
  const [profiles, setProfiles] = useState([]);

  const getData = async () => {
    const myData = await getProfiles();
    setProfiles(myData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/post" component={Form} />
        <Route path="/drivers" component={Drivers} />
        <Route path="/chariots" component={CharriotPage} />
        <Route exact path="/" component={FrontPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
