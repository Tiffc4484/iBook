import './App.css';
import './ib.css';
import HomeScreen from "./HomeScreen";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ResultsScreen from "./ResultsScreen";
import DetailsScreen from "./DetailsScreen";
import LoginScreen from "./Authentication/LoginScreen";
import SignUpScreen from "./Authentication/SignUpScreen";
import CartScreen from "./ShoppingCart/CartScreen";
import {useEffect, useState} from "react";


function App() {
    const [user, setUser] = useState();
    const [flag, refreshPage] = useState(true);
    useEffect(() => {
        getUser().then((user) => {
            setUser(user);
            console.log(`re-render user: ${user.username}`);
        });
    }, [flag]);
  return (
    <div className="container-fluid">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen/>}></Route>
                <Route path="/results/:keyword" element={<ResultsScreen/>}></Route>
                <Route path="/details/:id" element={<DetailsScreen/>}></Route>
                <Route exact path="/auth/login" element={<LoginScreen/>}></Route>
                <Route exact path="/auth/signup" element={<SignUpScreen/>}></Route>
                <Route exact path="/shopping_cart" element={<CartScreen/>}></Route>

            </Routes>
        </BrowserRouter>
      </div>
  );
}

async function getUser() {
  const resRaw = await fetch("/auth/user");
  if (resRaw.status !== 204) {
    return await resRaw.json();
  }
}

export default App;
