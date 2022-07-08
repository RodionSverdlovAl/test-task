import '../../styles/information.scss';

const Information:React.FC = () =>{
    return(
        <div className="information-landing">
            <div className="description">
                <h1>РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h1>
                <p>Единый реестр программ для электронных вычислительных машин и баз данных</p>
                <div className='count-blok'>
                    <p>Включено ПО в реестр: <span>13 438</span></p>
                    <p>Праваобладателей: <span>4 272</span></p>
                </div>
                
            </div>
            <div className="search">
                <input type="text" placeholder='Искать реестр'/>
                <button>Искать</button>
            </div>

            <img src="../assets/landing.png" alt="landing-image" />
            
        </div>
    )
}

export default Information