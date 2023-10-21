import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
    const [seconds, setSeconds] = useState(30);
    const [minuites, setMinuites] = useState(2);
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {

        const timer = setInterval(() => {
            setSeconds(seconds - 1);
            if (seconds === 0) {
                setMinuites(minuites - 1);
                setSeconds(59)
            }
            if (minuites === 0 && seconds === 0) {
                setFlag(true);
            }
        }, 1000);
        return () => clearInterval(timer);
    });


    if (flag) {
        setTimeout(() => {
            return navigate("/login");
        }, 3000);
    }
    return (
        <>
            {flag ? <div className="mt-3">
                <span className="text-red-500 text-2xl font-bold uppercase">Please Try Again</span>
            </div>
                : <div className="mt-3 flex flex-row justify-center items-center gap-3">
                    <span className="text-xl text-orange-600">You Have :</span>
                    <span className="countdown font-mono text-2xl">
                        <span style={{ "--value": minuites }}></span>

                    </span>
                    <span className="text-xl font-semibold">Min</span>

                    <span className="countdown font-mono text-2xl">
                        <span style={{ "--value": seconds }}></span>

                    </span>
                    <span className="text-xl font-semibold">Sec</span>

                </div>}
        </>
    );
};

export default Timer;