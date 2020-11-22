import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ListDrivers from "./components/ListDrivers";
import Drivers from "./components/Drivers";
import Form from "./components/Form";
import CharriotPage from "./components/CharriotPage";

import { getProfiles } from "./api/apiCall";

import { Switch, Route } from "react-router-dom";
import Safety from "./components/Safety";
import Faq from "./components/Faq";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [tablo] = useState([]);

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
        <Route path="/post" component={() => <Form tablo={tablo} />} />
        <Route path="/drivers" component={Drivers} />
        <Route path="/chariots" component={CharriotPage} />
        <Route path="/safety" component={Safety} />
        <Route path="/faq" component={Faq} />

        <Route
          exact
          path="/"
          component={() => <ListDrivers profile={profiles} tablo={tablo} />}
        />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
