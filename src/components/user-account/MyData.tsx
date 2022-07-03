import { useState } from "react"
import '../../styles/account/my-data.scss';
const MyData:React.FC = ()=>{

    const [photo, setPhoto] = useState('https://www.meme-arsenal.com/memes/680459996f7aaf45eabdb8f251117b7a.jpg');
    const [hello, setHello] = useState('Здравствуй, Валерий');

    const [user, setUser] = useState({
        name: 'Валерий',
        surname: 'Жмешенко',
        fathername: 'Альбертович',
        state: 'Россия',
        city: 'Самара',
        phone: '+75454545454'
    })

    return(
        <div className="my-data">
            <div className="photo-hello">
                <img src={photo} alt="photo" />
                <h3>{hello}</h3>
            </div>
            <hr />
            <div className="general-data">
                <h2>Основные данные</h2>
                <form>
                    <div className="first-name">
                        <p>Имя</p>
                        <input type="text" value={user.name}/>
                    </div>
                    
                    <div className="second-name">
                        <p>Фамилия</p>
                        <input type="text" value={user.surname}/>
                    </div>
                   
                     <div className="father-name">
                        <p>Отчество</p>
                        <input type="text" value={user.fathername}/>
                    </div>
                    

                    <div className="state">
                        <p>Страна</p>
                        <select name="" id="">
                            <option value="Беларусь">Беларусь</option>
                            <option selected value="Россия">Россия</option>
                            <option value="Другая страна">Другая страна</option>
                        </select>
                    </div>
                  
                    <div className="city">
                        <p>Город</p>
                        <select name="" id="">
                            <option value="">Минск</option>
                            <option value="">Гомель</option>
                            <option value="">Могилев</option>
                            <option value="">Витебск</option>
                            <option value="">Гродно</option>
                            <option value="">Брест</option>
                            <option selected value="">Самара</option>
                        </select>
                    </div>

                   <div className="mobile-phone">
                       <p>Мобильный телефон</p>
                       <input type="text" value={user.phone}/>
                   </div> 
                    
                </form>
            </div>

            <hr className="middle-hr" />

            <div className="password-form">
                <h2>Пароль</h2>
                <div className="first-password">
                    <p>Новый пароль</p>
                    <input type="password" />
                </div>
                <div className="second-password">
                    <p>Подтверждение пароля</p>
                    <input type="password" />
                </div>
            </div>

            <hr className="bottom-hr" />

            <button className="save">Сохранить</button>
            
        </div>
    )
}
export default MyData