import { useEffect, useState } from "react";

import Header from "./components/Header";
import CharriotPage from "./components/CharriotPage";
import Footer from "./components/Footer";

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
      <CharriotPage />
      <Footer />
    </div>
  );
}

export default App;
