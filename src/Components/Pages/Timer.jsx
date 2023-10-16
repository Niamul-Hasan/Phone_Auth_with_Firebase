import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
    const [seconds, setSeconds] = useState(30);
    const [minuites, setMinuites] = useState(2);
    const navigate = useNavigate();
    useEffect(() => {

        const timer = setInterval(() => {
            setSeconds(seconds - 1);
            if (seconds === 0) {
                setMinuites(minuites - 1);
                setSeconds(59)
            }
        }, 1000);
        return () => clearInterval(timer);
    });

    if (minuites === 0 && seconds === 0) {
        setTimeout(() => {
            return navigate("/login");
        }, 1000);
    }
    return (
        <div className="mt-3 flex flex-row justify-center items-center gap-3">
            <span className="text-xl text-orange-600">Your Have :</span>
            <span className="countdown font-mono text-2xl">
                <span style={{ "--value": minuites }}></span>

            </span>
            <span>Min</span>

            <span className="countdown font-mono text-2xl">
                <span style={{ "--value": seconds }}></span>

            </span>
            <span>Sec</span>

        </div>
    );
};

export default Timer;