import React from 'react';

import './App.scss';
import AuthForm from './components/AuthForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { UserAccoutnPage } from './pages/UserAccountPage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element ={<LandingPage/>}/>
            <Route  path='auth' element={<AuthForm/>}/>
            <Route path = 'user' element = {<UserAccoutnPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
