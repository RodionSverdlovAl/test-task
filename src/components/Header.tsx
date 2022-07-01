import { useState } from "react"
const Header:React.FC = () =>{

    const [avatar, setAvatar] = useState('../assets/default-avatar.png');
    const [username, setUsername] = useState('Пользователь не авторизован')

    return(
        <div>
            <div className="logo"><img src="../assets/Vector.png" alt="logo" /></div>
            <input type="text" />
            <button><img src="" alt="" /></button>
            <button><img src="" alt="" /></button>
            <div className="user">
                <div className="avatar">
                    <img src={avatar} alt="avatar" />
                </div>
                <p className="username">{username}</p>
            </div>
        </div>
    )
}

export default Header