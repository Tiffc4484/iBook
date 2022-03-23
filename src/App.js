import './App.css';
import './ib.css';
import HomeScreen from "./HomeScreen";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ResultsScreen from "./ResultsScreen";
import DetailsScreen from "./DetailsScreen";

function App() {
  return (
    <div className="container-fluid">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen/>}></Route>
                <Route path="/results" element={<ResultsScreen/>}></Route>
                <Route path="/details" element={<DetailsScreen/>}></Route>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
