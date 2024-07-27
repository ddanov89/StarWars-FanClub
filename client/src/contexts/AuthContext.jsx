import { createContext, useState } from "react";

export const AuthContext = createContext({
    _id: "",
    email: "",
    token: "",
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
});

export function AuthContextProvider(props) {
    
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        //TODO: Quick solution, fix by implementing persisting authState
        localStorage.setItem('token', state.token);

        setAuthState(state);
    };

    const contextData = {
        _id: authState._id,
        email: authState.email,
        token: authState.token,
        isAuthenticated: !!authState.email,
        changeAuthState,
      };

    return (<AuthContext.Provider value={contextData}>
        {props.children}
    </AuthContext.Provider>);
}