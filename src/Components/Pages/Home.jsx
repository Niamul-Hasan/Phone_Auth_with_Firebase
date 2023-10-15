import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import { useContext } from "react";

const Home = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    const signOut = () => {
        logOut().then(() => {

        }).catch(error => { console.error(error) })
    }
    const handleClick = () => {

        navigate("/login");
    }
    return (
        <div className='text-center my-5'>
            <h1 className="text-4xl">This is homepage</h1>
            {user ? <button onClick={signOut} className="btn btn-sm">SignOut</button>
                : <button onClick={handleClick} className="btn btn-sm">SignIn</button>}
        </div>
    );
};

export default Home;