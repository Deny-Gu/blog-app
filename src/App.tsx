import Header from './components/Header/Header';
import './App.scss';
import ArticleList from './components/ArticleList/ArticleList';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ArticleList />
      </main>
    </div>
  );
}

export default App;
