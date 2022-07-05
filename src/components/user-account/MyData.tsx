import { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { countries } from "../../location";
import { BY_cities } from "../../location";
import { RF_cities } from "../../location";
import { IUser } from "../../models/IUsers";
import '../../styles/account/my-data.scss';
const MyData:React.FC = ()=>{

   const user = useTypedSelector(state=>state.userReducer.user)
   const [selectedCountry, setSelectedCountry] = useState<string>(user.data.state);
   const [selectedCity, setSelectedCity] = useState<string>(user.data.city);

   const [updateUser,setUpdateUser] = useState<IUser>({
        auth: {
            username: user.auth.username,
            password: user.auth.password
        },
        data:{
            photo: user.data.photo,
            name: user.data.name,
            surname: user.data.surname,
            fathername: user.data.fathername,
            state: user.data.state,
            city: user.data.city,
            phone: user.data.phone
        }
   })

    return(
        <div className="my-data">
            <div className="photo-hello">
                <img src={user.data.photo} alt="photo" />
                <h3>Здравствуй, {user.data.name}</h3>
            </div>
            <hr />
            <div className="general-data">
                <h2>Основные данные</h2>
                <form>
                    <div className="first-name">
                        <p>Имя</p>
                        <input type="text" value={user.data.name}/>
                    </div>
                    
                    <div className="second-name">
                        <p>Фамилия</p>
                        <input type="text" value={user.data.surname}/>
                    </div>
                   
                     <div className="father-name">
                        <p>Отчество</p>
                        <input type="text" value={user.data.fathername}/>
                    </div>
                    
                    <div className="state">
                        <p>Страна</p>
                        <select onChange={e=>setSelectedCountry(e.target.value)}>
                            <option selected value={user.data.state}>{user.data.state}</option>
                            {countries.filter(country => country.value!== user.data.state)
                                .map(country=><option value={country.value}>{country.name}</option>
                            )}
                        </select>
                    </div>
                  
                    <div className="city">
                        <p>Город</p>

                        {/* <MyDataSelect options={}/> */}
                        {
                            selectedCountry == "Беларусь" ?
                            <select>
                                 <option value={user.data.city}>{user.data.city}</option>
                                 {BY_cities.filter(city =>city.value!==user.data.city)
                                 .map(city=><option value={city.value}>{city.name}</option>)}
                            </select>
                            :
                            <select>
                                 <option value={user.data.city}>{user.data.city}</option>
                                 {RF_cities.filter(city =>city.value!==user.data.city)
                                 .map(city=><option value={city.value}>{city.name}</option>)}
                            </select>
                        }
                        {/* <select name="" id="">
                            <option value="">Минск</option>
                            <option value="">Гомель</option>
                            <option value="">Могилев</option>
                            <option value="">Витебск</option>
                            <option value="">Гродно</option>
                            <option value="">Брест</option>
                            <option selected value="">Самара</option>
                        </select> */}
                    </div>

                   <div className="mobile-phone">
                       <p>Мобильный телефон</p>
                       <input type="text" value={user.data.phone}/>
                   </div> 
                    
                </form>
            </div>

            <hr className="middle-hr" />

            <div className="password-form">
                <h2>Пароль</h2>
                <div className="first-password">
                    <p>Новый пароль</p>
                    <input type="password"/>
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