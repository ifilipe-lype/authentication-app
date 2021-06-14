import { useState, useEffect, useContext, createContext } from "react";
import { signIn, signUp, getUserProfile, updateUserProfile } from "../helpers/api-helper";
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
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (window) {
            let storedToken = localStorage.getItem("token");
            setToken(storedToken);
        }
    }, [])

    useEffect(() => {
        if (window) {
            localStorage.setItem("token", token);
        }
    }, [token])

    // Wrap any Firebase methods we want to use making sure ...
    // ... to save the user to state.
    const signin = async ({ email, password }) => {
        try {
            const res = await signIn({ email, password });
            setToken(res);
            Router.replace("/profile");
            return res;
        } catch (e) {
            throw e;
        }
    };

    const signup = async ({ name, email, password }) => {
        try {
            const res = await signUp({ name, email, password });
            setToken(res);
            Router.replace("/profile");
            return res;
        } catch (e) {
            throw e;
        }
    };

    const getProfile = async () => {
        try {
            const user = await getUserProfile({ token });
            setUser(user);
            return user;
        } catch (e) {
            signout();
        }
    }

    const updateProfile = async (multipartFormData) => {
        const user = await updateUserProfile({ multipartFormData, token });
        setUser(user);
        Router.replace("/profile")
    }

    const signout = () => {
        setToken(null);
        setUser(null);
        Router.replace("/login");
    };

    // Return the user object and auth methods
    return {
        token,
        user,
        signin,
        signup,
        signout,
        getProfile,
        updateProfile,
    };
}

export function useRequireAuth(redirectTo = "/login") {
    const auth = useAuth();
    const router = useRouter();
  
    useEffect(() => {
      let token = localStorage.getItem("token");
      
      if (token === "null") {
        router.push(redirectTo);
      }
    }, [auth, router]);
  
    return auth;
  }
