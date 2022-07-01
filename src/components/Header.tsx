import { useState } from "react"
import '../styles/header.scss';
const Header:React.FC = () =>{

    const [avatar, setAvatar] = useState('../assets/default-avatar.png');
    const [username, setUsername] = useState('Вход в аккаунт');

    return(
        <div className="header">
            <div className="logo"><img src="../assets/Logo.png" alt="logo" /></div>
            <input className="search-input" placeholder="Поиск" type="text" />
            <button className="header-btn1"><img src="../assets/calendar.png" alt="calendar" /></button>
            <button className="header-btn2"><img src="../assets/kalakolchik.png" alt="уведомления" /></button>
            <div className="user">
                <div className="avatar">
                    <img src={avatar} height={48} alt="avatar" />
                </div>
                <div>
                    <p className="username">{username}</p>
                </div>
               
            </div>
        </div>
    )
}

export default Header