import './App.css';
import Searchbar from './Components/Searchbar';

function App() {
  return (
    <div className="container">
      <header className="d-flex justify-content-center my-4">
        <h1>Welcome to the Hackernews</h1>
      </header>
      <main className="d-flex justify-content-center pb-5">
        <Searchbar />
      </main>
    </div>
  );
}

export default App;
