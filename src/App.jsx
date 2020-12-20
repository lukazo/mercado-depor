import './styles/app.css';
//import {useState} from 'react';
import './styles/reset.css';
import NavBar from './components/Header/NavBar/NavBar';
import Featured from './containers/Home/Featured/Featured';

function App() {
  

  return (
    <>
      <NavBar />
      <Featured />
    </>
  );
}

export default App;
