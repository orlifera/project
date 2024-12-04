// src/components/DefaultNoteContent.tsx
import React from 'react';
import { useState } from 'react';

const Welcome: React.FC = () => {

    const [sound] = useState(new Audio('/sadHamster.mp3')); // Replace with actual path to your audio file

    const handleClick = () => {
        sound.play(); // Play the sound when the image is clicked
    };
    return (
        <>
            <div className="welcome">
                <h2 className='title'>this is a h2</h2>
                <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore est at et delectus, minima, reprehenderit quae assumenda soluta vitae iure, cupiditate in. Cumque sapiente quaerat beatae, accusamus dicta tenetur.</p>
                <br />
                <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <br />
                <p className='paragraph'>Lorem ipsum dolor.</p>
            </div>
            <div className='hamster-container'>
                <div className='girl'>
                    <img src='/girl-hamster.png'
                        onClick={handleClick}
                    />
                </div>


            </div>
        </>
    );
};

export default Welcome;
