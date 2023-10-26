import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import { useContext } from "react";

const Home = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const signOut = () => {
        logOut().then(() => {

        }).catch(error => { console.error(error) })
    }
    const handleClick = () => {

        navigate("/login");
    }
    const handlecheck = () => {
        if (user.email) {
            return console.log("user has a nice email address");
        }
        if (user.phoneNumber) {
            return console.log("user has  a fine phone number")
        }
    }
    return (
        <div className='text-center my-5'>
            <h1 className="text-4xl">This is homepage</h1>
            <h1>The Current User is:{user?.email || user?.phoneNumber}</h1>

            <div className="flex flex-row justify-between w-1/2 mx-auto">
                <button onClick={handlecheck} className="btn btn-sm btn-error">Check</button>
                <button className="btn btn-sm btn-info" onClick={() => navigate("/print")}> printing page </button>

                {user ? <button onClick={signOut} className="btn btn-sm">SignOut</button>
                    : <button onClick={handleClick} className="btn btn-sm">SignIn</button>}
            </div>
        </div>
    );
};

export default Home;