import { userAPI } from '../../services/UserService';
import '../../styles/registers.scss';
import RegisterItem from './RegisterItem';

const Registers: React.FC = () =>{

    const {data:registers, isError, isLoading} = userAPI.useFetchAllRegistersQuery(10)

    return(
        <div className="registers-block">
            <h2>Реестры</h2>
            <img className='sort-icon' src="../../assets/sort.png" alt="sort" />
            <img className='treepoint-icon' src="../../assets/treepoint.png" alt="treepoint" />

            <div className="registers-container">
                <hr />
                <div className="reg-header">
                    <div className="reg-number"><p>Регистрационный номер</p></div>
                    <div className="software-number"><p>Наименование программного обеспечения</p></div>
                    <div className="class-code"><p>Код класса</p></div>
                    <div className="class-sofrware"><p>Класс программного обеспечения</p></div>
                    <div className="reg-date"><p>Дата регистрации</p></div>
                    <div className="site-address"><p>Адрес сайта</p></div>
                </div>
                <hr />
                {/* Тут буду недрерить компоненты через мэп */}
                {registers?.map(register=><RegisterItem register={register}/>)}
            </div>
        </div>
    )
}

export default Registers