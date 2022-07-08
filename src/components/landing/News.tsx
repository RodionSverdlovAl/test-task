import { userAPI } from "../../services/UserService"
import NewsItem from "./NewsItem";
import '../../styles/news.scss';

const News:React.FC = () =>{

    const {data:news, isError, isLoading} = userAPI.useFetchAllNewsQuery(6)

    return(
        <div className="news">
            <h1>Новостри реестра</h1>
            <div className="news-container">
                 {news?.map(news=><NewsItem news={news}/>)}
            </div>
            <button>Показать все</button>
           
           
        </div>
    )
}

export default News