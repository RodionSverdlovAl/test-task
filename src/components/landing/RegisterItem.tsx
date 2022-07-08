import { IRegister } from "../../models/IRegister"

interface RegisterItemProps {
    register: IRegister;
}

const RegisterItem:React.FC<RegisterItemProps> = ({register}) =>{
    return(
        <>
        <div className="register-item">
            <div className="reg-number"><p>#{register.id}</p></div>
                <div className="software-number"><p>{register.name}</p></div>
                <div className="class-code"><p>{register.code}</p></div>
                <div className="class-sofrware"><p>{register.class}</p></div>
                <div className="reg-date"><p>{register.date}</p></div>
                <div className="site-address"><p><a href="#">ссылка</a></p>
            </div>
        </div>
        <hr />
        </>
        
    )
}
export default RegisterItem