import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Home = () => {
    const authInfo = useContext(AuthContext)
    console.log(authInfo);
    return (
        <div>
            <h4>The owner of this Home : {authInfo.name}</h4>

        </div>
    );
};

export default Home;