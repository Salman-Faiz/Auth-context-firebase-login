import { createContext } from "react";
import PropTypes from 'prop-types';

 export const AuthContext = createContext(null); 

const AuthProvider = ({children}) => {
    const authInfo = { name : 'salman faiz'}
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