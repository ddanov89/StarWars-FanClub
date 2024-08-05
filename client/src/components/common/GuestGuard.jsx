import { useAuthContext } from "../../contexts/AuthContext";

export function GuestGuard() {
  const { isAuthenticated } = useAuthContext();
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
}
