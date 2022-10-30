import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import List from "./Components/List";
import Form_Modal from "./Components/Form_Modal";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Home />
      <Form_Modal />
      <List />
    </div>
  );
}

export default App;
