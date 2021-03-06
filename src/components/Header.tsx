import { useState } from "react"
import '../styles/header.scss';
import {Link} from 'react-router-dom'
import { useTypedSelector } from "../hooks/useTypedSelector";
const Header:React.FC = () =>{

    const [avatar, setAvatar] = useState('../assets/default-avatar.png');
    const [username, setUsername] = useState('Вход в аккаунт');
    const {isAuth} = useTypedSelector(state=>state.authReducer);
    const {user} = useTypedSelector(state=>state.userReducer);

    return(
        <div className="header">
            <Link to='/'><div className="logo"><img src="../assets/Logo.png" alt="logo" /></div></Link>
            <input className="search-input" placeholder="Поиск" type="text" />
            <button className="header-btn1"><img src="../assets/calendar.png" alt="calendar" /></button>
            <button className="header-btn2"><img src="../assets/kalakolchik.png" alt="уведомления" /></button>
            <div className="user">
                <div className="avatar">
                    {isAuth
                        ? <img src={user.data.photo} height={48} alt="avatar" />
                        : <img src={avatar} height={48} alt="avatar" />
                    }
                </div>
                <div>
                    {isAuth
                        ? <Link to='/user/my-data' className="username">{user.data.name} {user.data.surname}</Link>
                        : <Link to='/auth' className="username">{username}</Link>
                    }
                    
                </div>
               
            </div>
        </div>
    )
}

export default Header