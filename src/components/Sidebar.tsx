import { Link } from 'react-router-dom';
import { Note } from '../types';
import notesData from '../data/notes.json';


const notes: Note[] = notesData;

function Sidebar() {
    return (
        <nav className="sidebar">
            <div className='sidebar-content'>
                <Link to="/notes" className='link'><h2 id='notes'>Notes</h2></Link>
                <ul className='notes-list'>
                    {notes.map((note: Note) => (
                        <li key={note.id}>
                            <Link to={`/notes/${note.id}`} className='link note-link'>{note.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav >
    );
}

export default Sidebar;