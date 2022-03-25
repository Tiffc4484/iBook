import './App.css';
import './ib.css';
import HomeScreen from "./HomeScreen";
import {BrowserRouter, Routes, Route} from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import ResultsScreen from "./ResultsScreen";
import DetailsScreen from "./DetailsScreen";
import LoginScreen from "./Authentication/LoginScreen";
import SignUpScreen from "./Authentication/SignUpScreen";

function App() {
  return (
    <div className="container-fluid">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen/>}></Route>
                <Route path="/results" element={<ResultsScreen/>}></Route>
                <Route path="/details" element={<DetailsScreen/>}></Route>
                <Route exact path="/login" element={<LoginScreen/>}></Route>
                <Route exact path="/signup" element={<SignUpScreen/>}></Route>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
