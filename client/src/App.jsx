import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

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
import Logout from "./components/logout/Logout";
import Like from "./components/like/Like";
import Delete from "./components/delete/Delete";
import PrivateGuard from "./components/common/PrivateGuard";

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<MovieDetails />} />
        <Route element={<PrivateGuard />}>
            <Route path="/create" element={<MovieCreate />} />
            <Route path="/edit/:id" element={<MovieEdit />} />
            <Route path="delete/:id" element={<Delete />} />
            <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/like/:id" element={<Like />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
