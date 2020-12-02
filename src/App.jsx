import './styles/app.css';
import Hero from './components/home/Hero';
import imgImg from './assets/a.jpg';

function App() {
  return (
    <>
      <Hero />
      <img src={imgImg} alt="imagen de imagen" />
    </>
  );
}

export default App;
