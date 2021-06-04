import { useState, useEffect, useContext, createContext } from "react";
import { signIn, signUp } from "../helpers/api-helper";
import { useRouter } from "next/router";

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
    return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
    const Router = useRouter();
    const [token, setToken] = useState();

    useEffect(() => {
        if(window){
            let storedToken = localStorage.getItem("token");
            setToken(storedToken);
        }
    }, [])

    useEffect(() => {
        if(window){
            localStorage.setItem("token", token);
        }
    }, [token])

    // Wrap any Firebase methods we want to use making sure ...
    // ... to save the user to state.
    const signin = async ({ email, password }) => {
        try {
            const res = await signIn({ email, password });
            setToken(res);
            Router.replace("/");
            return res;
        } catch (e) {
            throw e;
        }
    };

    const signup = ({email, password}) => {
        return signUp({email, password})
            .then((response) => {
                setToken(response.token);
                return response.token;
            });
    };

    const signout = () => {
        setToken(null);
    };

    const loadStoreToken = async () => {
        const token = localStorage.getItem("token");
        setToken(token);
    }

    // Return the user object and auth methods
    return {
        token,
        signin,
        signup,
        signout,
    };
}
