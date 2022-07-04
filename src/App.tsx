import React, { useEffect, useState } from 'react';
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
import { userAPI } from './services/UserService';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useAppDispatch } from './hooks/useAppDispatch';
import { AuthActionCreators } from './store/reducers/auth/action-creators';
import { UserActionCreators } from './store/reducers/user/action-creators';
import { IData } from './models/IUsers';

function App() {

  const {isAuth} = useTypedSelector(state=>state.authReducer)
  const {data:users, isError, isLoading} = userAPI.useFetchAllUsersQuery(100);
  const dispatch = useAppDispatch();
 // const data =  JSON.parse(localStorage.getItem ("data"));
  useEffect(()=>{
    if(localStorage.getItem("auth")){
      dispatch(AuthActionCreators.setIsAuth(true))
      //dispatch(UserActionCreators.setUser())
    }
  },[])

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