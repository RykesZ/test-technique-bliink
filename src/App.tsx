import './App.scss';
import { Routes, Route } from "react-router-dom";
import { Header } from './components/common/header/header.component';
import { Home } from './components/pages/home/home.page'
import { ReadArticle } from './components/pages/article/readArticle.page';
import { ArticleProvider } from './services/articleContext';

function App() {
  return (
    <div className="App">
      <ArticleProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/article" element={<ReadArticle />}/>
          <Route path="/404" element={<Home />}/>
          <Route path="*" element={<Home />}/>
        </Routes>
      </ArticleProvider>
    </div>
  );
}

export default App;
