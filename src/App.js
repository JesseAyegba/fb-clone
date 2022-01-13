import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <div className="app__container">
        <div className="app__sidebar">
          <Sidebar />
        </div>

        <main className="app__middle"></main>

        <div className="app__feeds"></div>
      </div>
    </div>
  );
};

export default App;
