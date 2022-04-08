import './App.css';
import './ib.css';
import HomeScreen from "./HomeScreen";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ResultsScreen from "./ResultsScreen";
import DetailsScreen from "./DetailsScreen";
import LoginScreen from "./Authentication/LoginScreen";
import SignUpScreen from "./Authentication/SignUpScreen";
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
            <Route path="/" element={<HomeScreen user={user}/>}></Route>
            <Route path="/results" element={<ResultsScreen/>}></Route>
            <Route path="/details" element={<DetailsScreen/>}></Route>
            <Route path="/auth/login" element={<LoginScreen/>}></Route>
            <Route path="/auth/signup" element={<SignUpScreen/>}></Route>
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
