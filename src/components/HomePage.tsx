
import Countdown from './Countdown'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const HomePage: React.FC = () => {

    const targetDate = '2024-11-30T12:30:00'

    const [sound] = useState(new Audio('/sadHamster.mp3')); // Replace with actual path to your audio file

    const handleClick = () => {
        sound.play(); // Play the sound when the image is clicked
    };

    return (
        <main>
            <div className='container'>
                <h3 className='subtitle'>Countdown to {targetDate}: </h3>
                <Countdown targetDate={targetDate} />
                <br />
                <p>Click on left image for an easter egg. </p>

            </div>

            <div className='hamster-container'>
                <div className='boy'>
                    <Link to="/wish">
                        <img
                            src='/boy-hamster.png'
                        />
                    </Link>
                </div>
                <div className='girl'>
                    <img src='/girl-hamster.png'
                        onClick={handleClick}
                    />
                </div>


            </div>
        </main>
    )
}

export default HomePage; 
