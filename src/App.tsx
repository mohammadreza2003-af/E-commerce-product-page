import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
import Main from "./components/Main";
import Popup from "./components/Popup";
import { Provide } from "./context/globalContext";

function App() {
  return (
    <Provide>
      <Popup />
      <Container>
        <Header />
        <Main />
      </Container>
    </Provide>
  );
}

export default App;
