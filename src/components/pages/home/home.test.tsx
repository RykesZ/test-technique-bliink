import { render, screen, waitFor } from '@testing-library/react';
import { Home } from './home.page';
import NewsService from '../../../services/news.service';
import { AxiosResponse } from 'axios';
import { act } from 'react-dom/test-utils';

const mockGetNews = async () => {
    return {
        data: {
            articles:
                [
                    {
                        author: "Jean Jean",
                        content: "Content of the article",
                        description: "Description of the article",
                        publishedAt: new Date,
                        source: { id: "id of the article source", name: "name of the article source" },
                        title: "Title of the article",
                        url: "url to the article",
                        urlToImage: "url to the article image"
                    },
                    {
                        author: "John John",
                        content: "Content of the article 2",
                        description: "Description of the article 2",
                        publishedAt: new Date,
                        source: { id: "id of the 2nd article source", name: "name of the 2nd article source" },
                        title: "Title of the article 2",
                        url: "url to the article 2",
                        urlToImage: "url to the 2nd article image"
                    },
                    {
                        author: "Bob Bob",
                        content: "Content of the article 3",
                        description: "Description of the article 3",
                        publishedAt: new Date,
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
    render(<Home />);
    const articles = (await mockGetNews()).data.articles;
    for (const article of articles) {
        const titleElement = await screen.findByText(article.title);
        expect(titleElement).toBeInTheDocument();
    }
});

test('Checking useEffect triggering getNews() has been called 1 time', async () => {
    const fetchNewsSpy = jest.spyOn(NewsService.prototype, 'getNews');
    fetchNewsSpy.mockResolvedValue(mockGetNews());

    await act(async () => {
        render(<Home />);
      });
    expect(fetchNewsSpy).toHaveBeenCalledTimes(1);
});