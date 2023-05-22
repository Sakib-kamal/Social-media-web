import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
   user: null,
//  {
//         _id: "61bf68871561021d47e4174d",
// username: "sadique",
// email:"sadique@gmail.com",
// password :"$2b$10$SGBXNHPYipi05Nbd7aY.m.eBlDutROFSi0dhhpZKjBIHVkQoZp7XK",
// profilePicture:"person/kamal.jpeg",
// coverPicture:"",
// followers:Array,
// followings :Array,
//     },
   
isFetching: false,
    error: false,

};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}