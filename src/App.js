import Home from './pages/home/Home';
import Navigation from './components/navigation/Navigation.js';
import './App.css';

const menu = [
  { id: 'nav1', name: 'home', link: '/'},
  { id: 'nav2', name: 'About', link: '/about'},
]

function App() {
  return (
    <div className="App">
      <Navigation menu={menu}/>
      <Home/>
    </div>
  );
}

export default App;
