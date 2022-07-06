import { useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { countries } from "../../location";
import { BY_cities } from "../../location";
import { RF_cities } from "../../location";
import { IUser } from "../../models/IUsers";
import { userAPI } from "../../services/UserService";
import { UserActionCreators } from "../../store/reducers/user/action-creators";
import '../../styles/account/my-data.scss';
const MyData:React.FC = ()=>{

   const user = useTypedSelector(state=>state.userReducer.user)
   const [update, {}] = userAPI.useUpdateUserMutation();
   
   const dispatch = useAppDispatch();

   const updateUser =async() =>{
     const upUser ={
        id: user.id,
        auth:{
            username: username,
            password: password
        },
        data:{
            photo: user.data.photo,
            name: name,
            surname: surname,
            fathername: fathername,
            state: selectedCountry,
            city: selectedCity,
            phone: phone,
        }
     }
     await update(upUser);
     dispatch(UserActionCreators.setUser(upUser))
     localStorage.setItem("user", JSON.stringify(upUser))
     alert('Информация о пользователе Измененна')
   }


   const [selectedCountry, setSelectedCountry] = useState<string>(user.data.state);
   const [selectedCity, setSelectedCity] = useState<string>(user.data.city);


   const [id,setId] = useState<number>(user.id)

   const [username, setUsername] = useState<string>(user.auth.username);
   const [password,setPassword] = useState<string>(user.auth.password);

   const [photo,setPhoto] = useState<string>(user.data.photo);
   const [name, setName] = useState<string>(user.data.name);
   const [surname, setSurname] = useState<string>(user.data.surname);
   const [fathername, setFathername] = useState<string>(user.data.fathername);
   const [state,setState] = useState<string>(user.data.state);
   const [city, setCity] = useState<string>(user.data.city)
   const [phone, setPhone] = useState<string>(user.data.phone)

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
                        <input onChange={e=>setName(e.target.value)} type="text" value={name}/>
                    </div>
                    <div className="second-name">
                        <p>Фамилия</p> 
                        <input onChange={e=>setSurname(e.target.value)} type="text" value={surname}/>
                    </div>
                     <div className="father-name">
                        <p>Отчество</p> 
                        <input onChange={e=>setFathername(e.target.value)} type="text" value={fathername}/>
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
                        {
                            selectedCountry == "Беларусь" ?
                            <select onChange={e=>setSelectedCity(e.target.value)}>
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
                    </div>
                   <div className="mobile-phone">
                       <p>Мобильный телефон</p>
                       <input onChange={e=>setPhone(e.target.value)} type="text" value={phone}/>
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

            <button onClick={updateUser} className="save">Сохранить</button>
            
        </div>
    )
}
export default MyData