import Form from "./components/Form";

const { default: Footer } = require("./components/Footer");
const { default: Header } = require("./components/Header");


function App() {
  return (
    <div>
      <Header />
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
