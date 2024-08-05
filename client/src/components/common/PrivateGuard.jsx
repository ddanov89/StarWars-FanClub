import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../AuthContext";

export default function PrivateGuard(children) {
  const { isAuthenticated } = useAuthContext();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
