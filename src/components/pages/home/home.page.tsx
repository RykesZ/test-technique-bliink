import React, { useEffect, useState } from "react";
import NewsService from "../../../services/news.service";
import { Card } from "../../common/card/card.component";
import { useArticleContext } from "../../../services/articleContext"

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

export const Home = () => {

    const [newsList, setNewsList] = useState<Array<Article>>([]);
    const [dataRetrieved, setDataRetrieved] = useState(false);
    const { setSelectedArticle } = useArticleContext();

    // Retrieve last news and store them in an array
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

    // Reset selectedArticle when loading Home
    useEffect(() => {
        setSelectedArticle(null);
    }, [setSelectedArticle])

    // If there is at least 1 news in the news list, data is considered retrieved and said news are displayed
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