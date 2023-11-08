import { render, screen, waitFor, act } from '@testing-library/react';
import { Home } from './home.page';
import NewsService from '../../../services/news.service';
import { AxiosResponse } from 'axios';
import { ArticleProvider } from '../../../services/articleContext';
import { BrowserRouter as Router } from 'react-router-dom';

const mockGetNews = async () => {
    return {
        data: {
            articles:
                [
                    {
                        author: "Jean Jean",
                        content: "Content of the article",
                        description: "Description of the article",
                        publishedAt: "2023-11-07T16:29:43Z",
                        source: { id: "id of the article source", name: "name of the article source" },
                        title: "Title of the article",
                        url: "url to the article",
                        urlToImage: "url to the article image"
                    },
                    {
                        author: "John John",
                        content: "Content of the article 2",
                        description: "Description of the article 2",
                        publishedAt: "2023-11-07T16:29:43Z",
                        source: { id: "id of the 2nd article source", name: "name of the 2nd article source" },
                        title: "Title of the article 2",
                        url: "url to the article 2",
                        urlToImage: "url to the 2nd article image"
                    },
                    {
                        author: "Bob Bob",
                        content: "Content of the article 3",
                        description: "Description of the article 3",
                        publishedAt: "2023-11-07T16:29:43Z",
                        source: { id: "id of the 3rd article source", name: "name of the 3rd article source" },
                        title: "Title of the article 3",
                        url: "url to the article 3",
                        urlToImage: "url to the 3rd article image"
                    }
                ]
        },
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
    } as AxiosResponse<any>;

};

jest.mock('../../../services/news.service', () => ({
    __esModule: true,
    default: class NewsService {
        async getNews() {
            return await mockGetNews();
        }
    },
}));


test("Retrieving data : checking article's title", async () => {
    let container;
    
    act(() => {
        container = render(
        <Router>
            <ArticleProvider >
                <Home />
            </ArticleProvider>
        </Router>).container;
    });
    const articles = (await mockGetNews()).data.articles;
    for (const article of articles) {
        const titleElement = await screen.findByText(article.title);
        expect(titleElement).toBeInTheDocument();
    }
});

test('Checking useEffect triggering getNews() has been called 1 time', async () => {
    const fetchNewsSpy = jest.spyOn(NewsService.prototype, 'getNews');
    fetchNewsSpy.mockResolvedValue(mockGetNews());
    let container;

    await act(async () => {
        container = render(
            <Router>
                <ArticleProvider >
                    <Home />
                </ArticleProvider>
            </Router>).container;
        });

            await waitFor(() => {
                expect(fetchNewsSpy).toHaveBeenCalledTimes(1);
            });

});