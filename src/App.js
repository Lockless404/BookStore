import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { HiUser } from 'react-icons/hi';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="leftNav">
            <h1>BookStore THC</h1>
            <ul>
              <li>
                <Link to="/">Books</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
          </div>
          <div>
            <HiUser color="blue" fontSize="1.5rem" />
          </div>
        </header>
        <section className="container">
          <Routes>
            <Route path="/" exact element={<Books />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
