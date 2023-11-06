import React, { useEffect, useState } from "react"
import NewsService from "../../../services/news.service";
import { Card } from "../../common/card/card.component";

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

export const Home = () => {

    const [newsList, setNewsList] = useState<Array<Article>>([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const newsService = new NewsService();
                const response = await newsService.getNews();
                setNewsList(response.data.articles);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }

        fetchNews();
    }, [])

    if (newsList.length > 0) {
        return (
            <div className="home">
                    {newsList.map((article, index) =>
                        <Card article={article} index={index} />
                    )}
            </div>
        )
    } else {
        return (<div>Oups ! Aucune news n'a été récupérée, réessayez plus tard !</div>)
    }
}