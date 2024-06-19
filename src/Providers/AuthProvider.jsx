import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

 export const AuthContext = createContext(null); 

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // const authInfo = { name : 'salman faiz'}
    const authInfo = { user ,createUser}
    return (
      <AuthContext.Provider value={authInfo}>

        {children}

      </AuthContext.Provider>
    );
};


export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}


/***
 * 1.Create context and export it
 * 2.set provider with value
 * 3.Use the auth provider in the main .jsx file
 * 4.access children in the auth provider component as children and use it in the middle of the provider
 */