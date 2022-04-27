import CountryList from './components/CountryList';
import CountryInfo from './components/CountryInfo';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<CountryList />}/>
        <Route path="/:name" element={<CountryInfo />}/>
     </Routes>
    </div>
    
    
  );
}

export default App;
