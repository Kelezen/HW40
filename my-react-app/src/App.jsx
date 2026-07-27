import "./App.css";

import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <h1>Homework 40</h1>

      <ControlledForm />

      <hr />

      <UncontrolledForm />
    </>
  );
}

export default App;