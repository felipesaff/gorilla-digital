import './App.css';
import logo from './assets/images/logo.jpg'
import SectionBlack from './components/SectionBlack';
import SectionDark from './components/SectionDark';
import SectionGrey from './components/SectionGrey';
import Header from './components/Header';
import Presentation from './components/Presentation'
import Services from './components/Services';
import Works from './components/Works';
import {Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6} from './assets/images/index'
        import About from './components/About';

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
        <Works>
          <span>
            <img src={Image3} alt="" />
          </span>
          
          <span>
            <img src={Image4} alt="" />
          </span>

          <span>
            <img src={Image3} alt="" />
          </span>

          <span>
            <img src={Image4} alt="" />
          </span>

          <span>
            <img src={Image3} alt="" />
          </span>

          <span>
            <img src={Image4} alt="" />
          </span>
        </Works>
      </SectionGrey>

      <SectionDark>
        <About>
          
        </About>
      </SectionDark>
    </div>
  );
}

export default App;
