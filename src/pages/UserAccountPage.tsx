import '../styles/user-account.scss';
import {Outlet} from 'react-router-dom'
import UserNavbar from "../components/UserNavbar"
const UserAccoutnPage:React.FC = () =>{
    return(
        <div className='user-accoutn-page'>
            <UserNavbar/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}
export {UserAccoutnPage}