import { IDocument } from "../../models/IDocument"

interface DocumentItemProps{
    document: IDocument;
}

const DocumentItem:React.FC<DocumentItemProps> = ({document}) =>{
    return(
        <div>
             <div className="doc-item">
                <div><p>{document.category}</p></div>
                <div><p>{document.name}</p></div>
                <div><p>{document.date}</p></div>
                <div><p>{document.number}</p></div>
                <div><p><a href="#">Скачать</a></p></div>
            </div>
        </div>
    )
}

export default DocumentItem