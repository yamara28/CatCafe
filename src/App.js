import './App.css';
import Header from './components/layout/header/header';
import MainPage from './components/pages/mainPage';
import Footer from './components/layout/footer/footer';

import Cats from './components/mocks/mock';


function App() {
  return (
    <div className="App">
      <div className="app__wrapper">
      <Header />
      <MainPage stars={Cats} />
      <Footer />
      </div>
    </div>
  );
}

export default App;
