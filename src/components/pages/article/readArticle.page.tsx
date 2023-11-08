import { useArticleContext } from "../../../services/articleContext";
import convertDateService from "../../../services/convertDate.service";

export const ReadArticle = () => {
    const { selectedArticle } = useArticleContext();
    if (selectedArticle === null) {
        return <div>Article not found</div>
    }

    return (
        <div className="readArticle">
            <h1>{selectedArticle.title}</h1>
            <p className="publishInfo">Published at : {convertDateService.formatDateToCustomString(selectedArticle.publishedAt)} on {selectedArticle.source.name} by {selectedArticle.author}</p>
            <img src={selectedArticle.urlToImage} alt={selectedArticle.description}/>
            <p className="content">{selectedArticle.content}</p>
        </div>
    )
};