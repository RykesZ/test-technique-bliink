import React, { useEffect } from "react"
import { useArticleContext } from "../../../services/articleContext"
import { useNavigate } from "react-router-dom"

type Article = {
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: {id: string, name: string},
    title: string,
    url: string,
    urlToImage: string
}

type CardProps = {
    article: Article,
    index: number
}

export const Card = (props: CardProps) => {
    const { setSelectedArticle, selectedArticle } = useArticleContext();
    const navigate = useNavigate();

    const handleReadArticle = () => {
        setSelectedArticle(props.article);
    }

    useEffect(() => {
        if (selectedArticle) {
            navigate("/article");
        }
    }, [selectedArticle, navigate])


    return (
            <div className="card">
                <h2>{props.article.title}</h2>
                <img src={props.article.urlToImage} alt={props.article.description}/>
                <p>{props.article.description}</p>
                <button onClick={() => handleReadArticle()}>Read full article</button>
            </div>
    )
}