import './App.css';
import Navbar from './containers/Navbar';
import aipng from './assets/ai.png';
import people from './assets/people.png';
import Header from './components/Header/Header';
import Empresaslogoc from './components/Empresaslogoc/Empresaslogoc';
import WhatGPTc from './components/WhatGPTc/WhatGPTc';
import Thefuturec from './components/Thefuturec/Thefuturec';
import Caixa from './components/Possibilidades/caixa';
import Bar from './components/barra/Bar';
import Opcaoc from './components/Opcaoc/Opcaoc';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header aipng={aipng} people={people}/>
      </div>
      <Empresaslogoc/>
      <WhatGPTc/>
      <Thefuturec/>
      <Caixa/>
      <Bar/>
      <Opcaoc/>
      <Footer/>
    </div>
  );
}

export default App;
