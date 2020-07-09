import React from 'react';
import Routes from './routes';
import './styles.css';


import Header from './components/Header';
import Events from './pages/events';
import Main from './pages/main';


function App() {
  return (
    <div className="App">
        <Routes /> 
    </div>
  );
}

export default App;
//<Main />
//<Header />