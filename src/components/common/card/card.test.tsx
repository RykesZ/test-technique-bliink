import {render, screen} from '@testing-library/react';
import { Card } from './card.component';

const article = {
    author: "Jean Jean",
    content: "Content of the article",
    description: "Description of the article",
    publishedAt: new Date,
    source: {id: "id of the article source", name: "name of the article source"},
    title: "Title of the article",
    url: "url to the article",
    urlToImage: "url to the article image"
}

test("Card renders article's title correctly", () => {
    render(<Card article={article} index={0}/>)
    const articleTitle = screen.getByText('Title of the article');
    
    expect(articleTitle).toBeInTheDocument();
})

test("Card renders article's image with correct url", () => {
    render(<Card article={article} index={0}/>)
    const articleImage = screen.getByAltText('Description of the article');

    expect(articleImage).toHaveAttribute('src', 'url to the article image');
})

test("Card renders article's description correctly", () => {
    render(<Card article={article} index={0}/>)
    const articleDescription = screen.getByText('Description of the article');

    expect(articleDescription).toBeInTheDocument();
})

test("Card renders article's link has expected url", () => {
    render(<Card article={article} index={0}/>);
    const articleLink = screen.getByText('Read full article');

    expect(articleLink).toHaveAttribute('href', 'url to the article');
})