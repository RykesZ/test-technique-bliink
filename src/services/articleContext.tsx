import React, { createContext, useContext, useState, ReactNode } from 'react';

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

type ArticleContextType = {
    selectedArticle: Article | null;
    setSelectedArticle: (article: Article | null) => void;
}

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const ArticleProvider = ({ children }: { children: ReactNode }) => {
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

    return (
        <ArticleContext.Provider value={{ selectedArticle, setSelectedArticle }}>
            {children}
        </ArticleContext.Provider>
    );
}

export const useArticleContext = () => {
    const context = useContext(ArticleContext);
    if (!context) {
        throw new Error('useArticleContext must be used within an ArticleProvider');
    }
    return context;
}