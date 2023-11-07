import React from "react"

type Article = {
    author: string,
    content: string,
    description: string,
    publishedAt: Date,
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
    return (
            <div className="card">
                <h2>{props.article.title}</h2>
                <img src={props.article.urlToImage} alt={props.article.description}/>
                <p>{props.article.description}</p>
                <a href={props.article.url}>Read full article</a><br />
            </div>
    )
}