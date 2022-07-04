import React, { useState } from 'react';

import './App.scss';
import AuthForm from './components/AuthForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
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

  const [isAuth, setIsAuth] = useState(false)

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element ={<LandingPage/>}/>
            {/* Приватные роуты для авторизированного пользователя (Личный кабинет пользователя) */}
            {isAuth ? 
               <Route path = 'user/*' element = {<UserAccoutnPage/>}>
                <Route path='my-data' element={<MyData/>}/>
                <Route path='notifications' element={<Notifications/>}/>
                <Route path='registers' element={<Registers/>}/>
                <Route path='meta-data' element={<MetaData/>}/>
                <Route path='safety' element={<Safety/>}/>
                <Route path ='my-downloads' element ={<MyDownloads/>}/>
              </Route>
             :
            // Роут для авторизации (доступен только не авторизированным пользователям)
             <Route  path='auth' element={<AuthForm/>}/>
            }
           
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
