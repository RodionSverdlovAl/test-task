import { INews } from "../../models/INews";

interface NewsItemProps {
    news: INews;
}

const NewsItem:React.FC<NewsItemProps> = ({news}) =>{
    return(
        <div className="news-item">
            <img src={news.image} alt="image" />
            <div className="info">
                <h3>{news.name}</h3>
                <div className="date">
                    <img src="../../assets/calendar.png" width={24} alt="" />
                    <p>{news.date}</p>
                </div>
                <p>{news.text}</p>
            </div>
            
        </div>
    )
}

export default NewsItem