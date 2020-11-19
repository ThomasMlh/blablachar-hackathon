import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";
import ListDrivers from "./components/ListDrivers";

import { getProfiles } from "./api/apiCall";

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
      <ListDrivers profile={profiles} />
      <Footer />
    </div>
  );
}

export default App;
