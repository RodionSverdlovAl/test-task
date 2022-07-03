import React from 'react';

import './App.scss';
import AuthForm from './components/AuthForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { UserAccoutnPage } from './pages/UserAccountPage';
import MyData from './components/user-account/MyData';
import Notifications from './components/user-account/Notifications';
import Registers from './components/user-account/Registers';
import MetaData from './components/user-account/MetaData';
import Safety from './components/user-account/Safety';
import MyDownloads from './components/user-account/MyDownloads';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element ={<LandingPage/>}/>
            <Route  path='auth' element={<AuthForm/>}/>
            <Route path = 'user/*' element = {<UserAccoutnPage/>}>
              <Route path='my-data' element={<MyData/>}/>
              <Route path='notifications' element={<Notifications/>}/>
              <Route path='registers' element={<Registers/>}/>
              <Route path='meta-data' element={<MetaData/>}/>
              <Route path='safety' element={<Safety/>}/>
              <Route path ='my-downloads' element ={<MyDownloads/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
