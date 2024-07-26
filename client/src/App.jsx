import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { AuthContext } from "./contexts/AuthContext";
import Home from "./components/home/Home";
import Catalog from "./components/catalog/Catalog";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import NotFound from "./components/notFound/NotFound";
import Search from "./components/search/Search";
import Header from "./components/header/Header";
import MovieCreate from "./components/movieCreate/MovieCreate";
import MovieEdit from "./components/movieEdit/MovieEdit";
import MovieDetails from "./components/movieDetails/MovieDetails";
import Profile from "./components/profile/Profile";

function App() {

  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    //TODO: Quick solution, fix by implementing persisting authState
    localStorage.setItem('accessToken', state.accessToken);

    setAuthState(state);
  };

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  };

  return (
    <AuthContext.Provider value={contextData}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<MovieDetails />} />
        <Route path="/create" element={<MovieCreate />} />
        <Route path="/edit/:id" element={<MovieEdit />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
