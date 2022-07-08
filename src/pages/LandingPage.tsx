import Header from "../components/Header"
import Information from "../components/landing/Information"
import Registers from "../components/landing/Registers"

const LandingPage:React.FC = () =>{
    return(
        <div>
            <Information/>
            <Registers/>
        </div>
    )
}
export {LandingPage}