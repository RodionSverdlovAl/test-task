import React from 'react';

import './App.scss';
import AuthForm from './components/AuthForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Information from './components/Information';

function App() {
  return (
    <div className="App">
        <Header/>
         <Information/>
        <Footer/>
    </div>
  );
}

export default App;
