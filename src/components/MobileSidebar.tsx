import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Note } from '../types';
import notesData from '../data/notes.json';

function MobileSidebar() {
    const notes: Note[] = notesData;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Reference for the sidebar element
    const sidebarRef = useRef<HTMLDivElement>(null);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Close sidebar if clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setSidebarOpen(false); // Close the sidebar if the click is outside
            }
        };

        // Add event listener on mount
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup event listener on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            {/* Hamburger Menu */}
            <button className="hamburger-menu" onClick={toggleSidebar}>
                &#9776; {/* Hamburger Icon */}
            </button>

            {/* Sidebar Mobile */}
            <nav
                className={`sidebar-mobile ${sidebarOpen ? 'open' : ''}`}
                ref={sidebarRef} // Attach ref to the sidebar
            >
                <div className="sidebar-content">
                    <Link to="/notes" className="link">
                        <h2 id='notes'>Notes</h2>
                    </Link>
                    <ul className="notes-list">
                        {notes.map((note: Note) => (
                            <li key={note.id}>
                                <Link to={`/notes/${note.id}`} className="link">
                                    {note.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default MobileSidebar;
