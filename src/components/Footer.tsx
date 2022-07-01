import '../styles/footer.scss';

const Footer:React.FC = () =>{
    return(
        <div className='footer'>
            <div className="general-information">
                <div className="logo">
                    <img src="../assets/Logo.png" alt="Logo" />
                    <p>Открытое акционерное общество «Реестр ПО» начало практическую деятельность с 1 марта 2014 г</p>
                </div>
                <div className="dev-info">
                    <h3>Разработчик</h3>
                    <div className="company-name">ОАО «Агентство сервисизации и реинжиниринга»</div>
                    <div className="address">Минск, улица Клары Цеткин, 24</div>
                </div>
            </div>
            <div className="information">
                <h3>Информация</h3>
                <ul>
                    <li>Реестры</li>
                    <li>Новости</li>
                    <li>Документы</li>
                    <li>Вопросы</li>
                </ul>
            </div>
            <div className="tech-support">
                <h3>Техническая поддержка</h3>
                <p>Ежедневно с 8.00 до 19.00, за исключением выходных (суббота, воскресенье) и праздничных дней</p>
                <hr />
                <ul>
                    <li>+375 25 111 22 33</li>
                    <li>+375 29 222 44 55</li>
                    <li>ReestrPOsupport@mail.ru</li>
                </ul>
            </div>
            <div className="contacts">
                <h3>Контакты</h3>
                <ul>
                    <li>+375 33 112 22 45</li>
                    <li>+375 29 222 44 88</li>
                    <li>ReesrtPO@mail.ru</li>
                    <li>220004 г. Минск, ул. Карла Маркса, 38</li>
                    <li><a href="#">Связаться с поддержкой</a></li>
                </ul>
            </div>
            <div className="bottom">
                <hr />
                <p>© Copyright 2022 — ОАО «РеестрПО». Все права защищены.</p>
            </div>
            
        </div>
    )
}

export default Footer