import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
const PhoneSignUp = () => {
    const { setRecapcha } = useContext(AuthContext);
    const [value, setValue] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState("");
    const [flag, setFlag] = useState(false);
    const [otp, setOtp] = useState("");
    const [result, setResult] = useState("");
    const navigate = useNavigate();
    const handleCancel = () => {
        navigate("/");
    }
    const handleOTP = async (e) => {
        e.preventDefault();
        console.log(value);
        setError("");
        if (value === "" || value === undefined) {
            setError("Please enter a valid phone number!");
            return console.log(error);
        }
        try {
            const response = await setRecapcha(value);
            console.log(response);
            setResult(response);
            setFlag(true);
        } catch (err) {
            setError(err.message);
        }
    }

    const verifyOtp = async (e) => {
        e.preventDefault();
        console.log(otp);
        setError("");
        if (otp === "" || otp === null) return;
        try {
            await result.confirm(otp);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className="card w-96 glass shadow-xl">
                {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">Sign Up With Your Active Phone Number</h2>
                    <div className='p-4'>
                        <form onSubmit={handleOTP}
                            style={{ display: !flag ? "block" : "none" }}
                        >
                            <PhoneInput
                                className='border border-green-200 rounded-md'
                                defaultCountry='BD'
                                placeholder="Enter phone number"
                                value={value}
                                onChange={setValue} />
                            <div className='mt-2' id="recaptcha-container"></div>
                            <div className="card-actions justify-end mt-4">
                                <button onClick={handleCancel} className="btn btn-sm btn-error">cancel</button>
                                <button className="btn btn-sm btn-success" type='submit'>send otp</button>
                            </div>
                        </form >
                        <form onSubmit={verifyOtp}
                            style={{ display: flag ? "block" : "none" }}
                        >
                            <input
                                type="otp"
                                placeholder="Enter OTP"
                                onChange={(e) => setOtp(e.target.value)} />
                            <div className='mt-2' id="recaptcha-container"></div>
                            <div className="card-actions justify-end mt-4">
                                <button onClick={handleCancel} className="btn btn-sm btn-error">cancel</button>
                                <button className="btn btn-sm btn-success" type='submit'>verify otp</button>
                            </div>
                        </form >

                    </div>

                </div>
            </div>


        </div >
    );
};

export default PhoneSignUp;