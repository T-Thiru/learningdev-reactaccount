import "./App.css";
import account from "./account.json";
import Logo from "./components/Logo";
import User from "./components/User";
import Releve from "./components/Releve";

const username = "Thiru";

function App() {
  return (
    <>
      <header>
        <div className="head wrapper">
          <Logo />
          <User username={username} />
        </div>
      </header>
      <main>
        {account.map((e) => {
          return <Releve account={e} />;
        })}
      </main>
    </>
  );
}

export default App;
