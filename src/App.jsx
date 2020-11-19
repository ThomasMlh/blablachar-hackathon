
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";

import { getProfiles } from "./api/apiCall";
import Form from "./components/Form";

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
      <Form />
      <Footer />
    </div>
  );
}

export default App;
