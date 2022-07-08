import Information from "../components/landing/Information"
import News from "../components/landing/News"
import Registers from "../components/landing/Registers"
import Documents from "../components/landing/Documents"

const LandingPage:React.FC = () =>{
    return(
        <div>
            <Information/>
            <Registers/>
            <News/>
            <Documents/>
        </div>
    )
}
export {LandingPage}