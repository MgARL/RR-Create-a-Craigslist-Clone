// Import data

// Import components
import './App.css';
import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar.js';
import Directory from './components/Directory';
import Sidebar from './components/Sidebar';

function App(){
  return (
    <div>
      <h1>Craigslist</h1>
      <div className="App">
        <Searchbar />
        <Gallery />
        <Directory />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
