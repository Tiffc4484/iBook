import './App.css';
import './ib.css';
import HomeScreen from "./HomeScreen";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ResultsScreen from "./ResultsScreen";
import DetailsScreen from "./DetailsScreen";
import LoginScreen from "./Authentication/LoginScreen";
import SignUpScreen from "./Authentication/SignUpScreen";
import CartScreen from "./ShoppingCart/CartScreen";
import BrowseScreen from './BrowseScreen';
import AboutScreen from "./AboutScreen";

function App() {
  
  return (
    <div className="container-fluid">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen/>}></Route>
                <Route path="/results/:keyword" element={<ResultsScreen/>}></Route>
                <Route path="/details/:id" element={<DetailsScreen/>}></Route>
                <Route path ="/browse" element={<BrowseScreen/>}></Route>
                <Route path="/about" element={<AboutScreen/>}></Route>
                <Route exact path="/auth/login" element={<LoginScreen/>}></Route>
                <Route exact path="/auth/signup" element={<SignUpScreen/>}></Route>
                <Route exact path="/shopping_cart" element={<CartScreen/>}></Route>
            </Routes>
        </BrowserRouter>
      </div>
  );
}



export default App;
