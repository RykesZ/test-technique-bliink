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
    const [dataRetrieved, setDataRetrieved] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const newsService = new NewsService();
                const response = await newsService.getNews();
                setNewsList(response.data.articles);
            } catch (error) {
                console.log(error);
            }
        }

        fetchNews();
    }, [])

    useEffect(() => {
        newsList.length > 0 ? setDataRetrieved(true) : setDataRetrieved(false);
    }, [newsList]);

    
        return ( dataRetrieved ?
            <div className="home">
                {newsList.map((article, index) =>
                    <React.Fragment key={index}>
                        <Card article={article} index={index} />
                    </React.Fragment>
                )}
            </div>
        :<div className="home">Woops! Data can't be retrieved, sorry! Please try again later.</div>)
}