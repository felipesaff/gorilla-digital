import './App.css';
import logo from './assets/images/logo.jpg'
import SectionBlack from './components/SectionBlack';
import SectionDark from './components/SectionDark';
import SectionGrey from './components/SectionGrey';
import Header from './components/Header';
import Presentation from './components/Presentation'
import Services from './components/Services';
import Works from './components/Works';

function App() {
  return (
    <div className="App">
      <SectionBlack>
        <Header>
          <img src={logo} />
        </Header>
        <Presentation />
      </SectionBlack>

      <SectionDark>
        <Services />
      </SectionDark>

      <SectionGrey>
        <Works />
      </SectionGrey>
    </div>
  );
}

export default App;
