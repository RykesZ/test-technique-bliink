import {render, screen} from '@testing-library/react';
import { Card } from './card.component';
import { ArticleProvider } from '../../../services/articleContext';
import { BrowserRouter as Router } from 'react-router-dom';

const article = {
    author: "Jean Jean",
    content: "Content of the article",
    description: "Description of the article",
    publishedAt: "2023-11-07T16:29:43Z",
    source: {id: "id of the article source", name: "name of the article source"},
    title: "Title of the article",
    url: "url to the article",
    urlToImage: "url to the article image"
}

test("Card renders article's title correctly", () => {
    render(
        <Router>
            <ArticleProvider >
                <Card article={article} index={0}/>
            </ArticleProvider>
        </Router>)
    const articleTitle = screen.getByText('Title of the article');
    
    expect(articleTitle).toBeInTheDocument();
})

test("Card renders article's image with correct url", () => {
    render(
        <Router>
            <ArticleProvider >
                <Card article={article} index={0}/>
            </ArticleProvider>
        </Router>)
    const articleImage = screen.getByAltText('Description of the article');

    expect(articleImage).toHaveAttribute('src', 'url to the article image');
})

test("Card renders article's description correctly", () => {
    render(
        <Router>
            <ArticleProvider >
                <Card article={article} index={0}/>
            </ArticleProvider>
        </Router>)
    const articleDescription = screen.getByText('Description of the article');

    expect(articleDescription).toBeInTheDocument();
})