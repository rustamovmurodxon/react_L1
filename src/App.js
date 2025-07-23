import './App.css';
import About from './components/about/About';
import Main from './components/main/Main';
import Cards from './components/cards/Cards';
import Navb from './components/header/Navb';
import Continue from './components/continue/Continue';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <>
      <Navb />
      <Main />
      <About />
      <Cards/>
      <Continue/>
      <Footer/>
      </>
    </div>
  );
}

export default App;
