// src/components/NoteContent.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import notesData from '../data/notes.json';
import { Note } from '../types';

const NoteContent: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const note = notesData.find((note: Note) => note.id === id);

    if (!note) {
        return (<div className='error-container'><p>Empty</p>
            <Link className='error-link' to="/notes">Torna alle note</Link></div>);
    }

    return (
        <div className="note-content">
            <h2 className='title note-title'>{note.title}</h2>
            <p className='date'>{note.date}</p>
            <article className='note-body'>{note.content}</article>
            {/* {note.comment && <p className='comment'>{note.comment}</p>} */}
        </div>
    );
};

export default NoteContent;
