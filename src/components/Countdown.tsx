import React, { useState, useEffect } from 'react';

interface CountdownProps {
    targetDate: string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date(targetDate) - +new Date();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    // Check if countdown is complete
    const isTimeUp =
        timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0;

    return (
        <div className="countdown">
            {isTimeUp ? (
                <div className="complete">Time's up.</div>
            ) : (
                <>
                    <div className="days">
                        <span>{timeLeft.days}</span>
                        <span className='blank'>{" "}</span>
                        <span className='text'>days</span>
                        <span className='blank'>{" "}</span>
                    </div>
                    <div className="hours">
                        <span>{timeLeft.hours}</span>
                        <span className='blank'>{" "}</span>
                        <span className='text'> hours</span>
                        <span className='blank'>{" "}</span>
                    </div>
                    <div className="minutes">
                        <span> {timeLeft.minutes}</span>
                        <span className='blank'>{" "}</span>
                        <span className='text'>minutes</span>
                        <span className='blank'>{" "}</span>
                    </div>
                    <div className="seconds">
                        <span> {timeLeft.seconds}</span>
                        <span className='blank'>{" "}</span>
                        <span className='text'>seconds</span>
                        <span className='blank'>{" "}</span>
                    </div>
                </>
            )}
        </div>
    );
};

export default Countdown;
