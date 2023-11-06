import './App.css';
import { Header } from './components/common/header/header.component';
import { Home } from './components/pages/home/home.page'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
