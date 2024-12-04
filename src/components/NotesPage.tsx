// src/components/NotesPage.tsx
import React from 'react';
import Sidebar from './Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import Welcome from './Welcome';
import { useEffect, useState } from 'react';
import MobileSidebar from './MobileSidebar';

const NotesPage: React.FC = () => {
    const location = useLocation();
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <>
            <div className="notes-page">
                {width > 768 ? <Sidebar /> : <MobileSidebar />}
                <div className="note-display">
                    {/* Check if the path includes a note ID, otherwise show default content */}
                    {location.pathname === '/notes' ? <Welcome /> : <Outlet />}
                </div>
            </div>
        </>);
};

export default NotesPage;
