import React from "react";
import { useGetMeQuery, UserRole } from "../generated/graphql";

interface UserContext {
  state: any;
  signIn: (_role: UserRole, _email: string, _name: string) => void;
  signOut: () => void;
}

const AuthContext = React.createContext<UserContext | null>(null);

function AuthContextProvider(props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  const { data, loading, error } = useGetMeQuery();

  const [state, dispatch] = React.useReducer(
    (
      prevState: any,
      action: {
        type: any;
        role?: UserRole | undefined;
        name?: string | undefined;
        email?: string | undefined;
      }
    ) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            role: action.role,
            name: action.name,
            email: action.email,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            role: action.role,
            name: action.name,
            email: action.email,
            isLoading: false,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isAuthenticated: false,
            role: null,
            name: null,
            email: null,
            isLoading: false,
          };
      }
    },
    {
      isLoading: true,
      role: null,
    }
  );

  React.useEffect(() => {
    if (error) dispatch({ type: "SIGN_OUT" });
    if (!loading && data?.getMe)
      dispatch({
        type: "RESTORE_TOKEN",
        role: data.getMe.role,
        email: data.getMe.email,
        name: data.getMe.name,
      });
  }, [data, loading, error]);

  const authContext = React.useMemo(
    () => ({
      state,
      signIn: (_role: UserRole, _email: string, _name: string) => {
        dispatch({
          type: "SIGN_IN",
          role: _role,
          email: _email,
          name: _name,
        });
      },
      signOut: () => {
        dispatch({ type: "SIGN_OUT" });
      },
    }),
    [state]
  );

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
