import { createContext, useContext } from "react";

import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext({
  _id: "",
  email: "",
  token: "",
  isAuthenticated: false,
  changeAuthState: (authState = {}) => null,
  logout: () => null
});

export function AuthContextProvider(props) {
  const [authState, setAuthState] = usePersistedState("auth", {});

  const changeAuthState = (state) => {
    setAuthState(state);
  };

  const logout = () => {
    setAuthState(null);
  };

  const contextData = {
    _id: authState?._id,
    email: authState?.email,
    token: authState?.token,
    isAuthenticated: !!authState?.email,
    changeAuthState,
    logout
  };

  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const authData = useContext(AuthContext);
  return authData;
}
