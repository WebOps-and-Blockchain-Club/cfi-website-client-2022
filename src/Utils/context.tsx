import React from "react";
import { useGetMeQuery, User } from "../generated/graphql";

interface UserContext {
  state: any;
  signIn: (_user: User) => void;
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
        user?: User | undefined;
      }
    ) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            user: action.user,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            user: action.user,
            isLoading: false,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isAuthenticated: false,
            user: undefined,
            isLoading: false,
          };
      }
    },
    {
      isLoading: true,
      user: null,
    }
  );

  React.useEffect(() => {
    if (error) dispatch({ type: "SIGN_OUT" });
    if (!loading && data?.getMe)
      dispatch({
        type: "RESTORE_TOKEN",
        user: data.getMe,
      });
  }, [data, loading, error]);

  const authContext = React.useMemo(
    () => ({
      state,
      signIn: (_user: User) => {
        dispatch({
          type: "SIGN_IN",
          user: _user,
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
