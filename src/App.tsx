import React from 'react';

import './App.scss';
import AuthForm from './components/AuthForm';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <Header/>
        <AuthForm/>
        <Footer/>
    </div>
  );
}

export default App;
