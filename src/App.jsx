import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";
import Drivers from "./components/Drivers";
import Form from "./components/Form";
import ChariotPage from "./components/ChariotPage";

import { getProfiles } from "./api/apiCall";

import { Switch, Route } from "react-router-dom";
import Safety from "./components/Safety";
import Faq from "./components/Faq";


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
        <Route path="/chariots" component={ChariotPage} />
        <Route path="/safety" component={Safety} />
        <Route path="/faq" component={Faq} />
        <Route exact path="/" component={FrontPage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
