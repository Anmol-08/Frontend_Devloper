import './App.css';
import Banner from './Components/Banner/Banner';
import SearchForm from './Components/SearchForm/SearchForm';
import DataGrid from './Components/DataGrid/DataGrid';

function App() {
  return (
    <div className="App">
      <Banner />
      <SearchForm />
      <DataGrid />
    </div>
  );
}

export default App;