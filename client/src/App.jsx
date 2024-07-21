import { Routes, Route } from "react-router-dom";

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
  return (
    <>
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
    </>
  );
}

export default App;
