import { userAPI } from "../../services/UserService"
import DocumentItem from "./DocumentItem";

const Documents = () =>{

    const {data:documents, isError, isLoading} = userAPI.useFetchAllDocumentsQuery(5);

    return(
        <div>
            <h1>Документы</h1>
            <p>Всего документов <span>5</span></p>
            <div className="doc-header">
                <div><p>Категория</p></div>
                <div><p>Наименование</p></div>
                <div><p>Дата</p></div>
                <div><p>Номер</p></div>
                <div><p>Содержание</p></div>
            </div>
            {documents?.map(doc=><DocumentItem document={doc}/>)}
        </div>
    )
}

export default Documents