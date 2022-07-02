import '../styles/auth-form.scss';

const AuthForm = () =>{
    return(
        <div className="Auth-form">
            <h1>АВТОРИЗАЦИЯ</h1>

            <div className="auth">
                <p style={{color:'#009CB4'}}>Имя</p>
                <input type="text" placeholder='Введите имя' />
                <p>Пароль</p>
                <input type="password" placeholder='Введите пароль'/><br />
                <div className="checkbox">
                   <div> <input type="checkbox" /></div>
                   <div><p>Запомнить меня на этом компьютере</p></div>
                    
                </div>
                <button>Вход</button><br />
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