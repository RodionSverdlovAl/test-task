import { useEffect, useState } from 'react';
import { userAPI } from '../services/UserService';
import '../styles/auth-form.scss';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { UserActionCreators } from '../store/reducers/user/action-creators';

const AuthForm = () =>{

    const [username,setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<string>('Неправильный пароль');
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

    const blurHandler = ()=>{
        setPasswordDirty(true);
    }

    const [rigthPassword, setRigthPassword] = useState<boolean>(false);
    useEffect(()=>{
        let passwords:string[] = [];
        users && users.forEach(user=>{
            passwords.push(user.auth.password)
            if(user.auth.username == username && user.auth.password == password){
                setPasswordError('');
                setPasswordDirty(false);
                setRigthPassword(true);
            }
        })
        if(!passwords.includes(password)){
            setPasswordError('Неверный пароль');
            setRigthPassword(false)
        }
    },[password])


    const [rightUsername, setRightUsername] = useState<boolean>(false);
    useEffect(()=>{
        console.log(username)
        let usernames:string[] = [];
        users && users.forEach(user=>{
            usernames.push(user.auth.username)
            console.log(usernames)
        })
        
        if(usernames.includes(username)){
            console.log('пользователь существует')
            setRightUsername(true);
        }else{
            setRightUsername(false);
            
        }
    },[username])

    return(
        <div className="Auth-form">
            <h1>АВТОРИЗАЦИЯ</h1>

            <div className="auth"> 
                {

                rightUsername 
                ?
                    <>
                        <p>Имя</p>
                        <div className='right'>
                            <input style={{ border: "1px solid #00B247"}}name='username' value={username} onChange={e=>setUsername(e.target.value)} type="text" placeholder='Введите имя' />
                            <div className='greenicon'><img src="../assets/greenicon.png" alt="greenicon" /></div>
                        </div>
                    </>
                :
                    <>
                        <div>
                            <p className='active-username'>Имя</p>
                            <input name='username' value={username} onChange={e=>setUsername(e.target.value)} type="text" placeholder='Введите имя' />
                        </div>
                    </>
                }

                {
                    (passwordDirty&& passwordError)
                    ?
                    <>
                        <p style={{color:'red'}}>Пароль</p>
                        <input style={{ border: "1px solid #E0371F"}} onBlur={blurHandler} name='password' value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder='Введите пароль'/><br />
                        {password.length == 0 ? <div className='error'>Поле не должно быть пустым</div> : <div className='error'>{passwordError}</div> }
                    </>
                    : rigthPassword
                        ?
                        <>
                            <p>Пароль</p>
                            <div className='right'>
                                <input style={{ border: "1px solid #00B247"}} onBlur={blurHandler} name='password' value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder='Введите пароль'/><br />
                                <div className='greenicon'><img src="../assets/greenicon.png" alt="greenicon" /></div>
                            </div>
                          
                        </>
                        :
                        <>
                            <p>Пароль</p>
                            <input onBlur={blurHandler} name='password' value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder='Введите пароль'/><br />
                        </>
                }

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