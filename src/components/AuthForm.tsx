import { useState } from 'react';
import { userAPI } from '../services/UserService';
import '../styles/auth-form.scss';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { UserActionCreators } from '../store/reducers/user/action-creators';

const AuthForm = () =>{

    const [username,setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const {data:users, isError, isLoading} = userAPI.useFetchAllUsersQuery(100);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const Auth = () =>{
        users && users.forEach(user=>{
            if(user.auth.username == username && user.auth.password == password){
               dispatch(AuthActionCreators.setIsAuth(true))
               localStorage.setItem("auth", "true");

               dispatch(UserActionCreators.setUser(user))
               localStorage.setItem("user", JSON.stringify(user))

               navigate('/')
            }
            else console.log('Пользователь НЕ авторизован')
        })
    }

    return(
        <div className="Auth-form">
            <h1>АВТОРИЗАЦИЯ</h1>

            <div className="auth">
                <p style={{color:'#009CB4'}}>Имя</p>
                <input value={username} onChange={e=>setUsername(e.target.value)} type="text" placeholder='Введите имя' />
                <p>Пароль</p>
                <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder='Введите пароль'/><br />
                <div className="checkbox">
                   <div> <input type="checkbox" /></div>
                   <div><p>Запомнить меня на этом компьютере</p></div>
                </div>
                <button onClick={Auth}>Вход</button><br />
                <div className="forgot-password"> <a href="#">Забыли свой пароль?</a></div>
               
                <div className='additional-auth'>
                   <p><a href="#">Авторизация с использованием ЕС ИФЮЛ</a></p> 
                </div>
                <div className='additional-auth'>
                    <p><a href="#">Авторизация с использованием МСИ</a></p>
                    
                </div>
            </div>
            <div className='reg-link'>
                <p>У вас нет аккаунта?</p>
                <a href="#">Нажмите сюда чтобы создать</a>
            </div>
        </div>
    )
}

export default AuthForm