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
        <React.Fragment key={props.index}>
            <div className="card">
                <img src={props.article.urlToImage} alt={props.article.description}/>
                <h2>{props.article.title}</h2>
                <p>{props.article.description}</p>
                <a href={props.article.url}>Article complet</a><br />
            </div>
        </React.Fragment>
    )
}