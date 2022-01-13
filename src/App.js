import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="app__nav"></div>
      <div className="app__container">
        <div className="app__sidebar"></div>

        <main className="app__middle"></main>

        <div className="app__feeds"></div>
      </div>
    </div>
  );
};

export default App;
