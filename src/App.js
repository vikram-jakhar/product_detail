import Secnav from './Components/Secnav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Sec1 from './Components/Sec1';
import Footer from './Components/Footer';
import Sec3 from './Components/Sec3';
import Sec2 from './Components/Sec2';
import  Tabsec from './Components/Tabsec';

function App() {
  return (
    <div>
      <Header />
      <Secnav />
      <Sec1 />
      <Sec2/>
      <Tabsec/>
      <Sec3/>
      <Footer/>
    </div>
  );
}

export default App;
