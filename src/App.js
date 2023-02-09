import logo from "./logo.svg";
import "./App.css";
import { AcceptCookis } from "./components/AcceptCookis";
import { Hipervinculos } from "./components/Hipervinculos";
import { TextBox } from "./components/TextBox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Preubas de CI/CD</p>
        <AcceptCookis />
        <Hipervinculos page="https://jestjs.io/docs/tutorial-react">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7F2EMBY2cZ2ZV8jCZHwBmpoeL9lN3VEZGA&usqp=CAU"
            alt="jest"
          />
        </Hipervinculos>
        <TextBox nameTitle="This is test"/>
      </header>
    </div>
  );
}

export default App;
