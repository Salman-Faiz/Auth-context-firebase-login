import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const { user } = useContext(AuthContext);

    if(user){
        return children; 
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
}