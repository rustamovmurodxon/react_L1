import './App.css';
import About from './components/about/About';
import Main from './components/main/Main';
import Cards from './components/cards/Cards';
import Navb from './components/header/Navb';

function App() {
  return (
    <div className="App">
      <>
      <Navb />
      <Main />
      <About />
      <Cards/>

      </>
    </div>
  );
}

export default App;
