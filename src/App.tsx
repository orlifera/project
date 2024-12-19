import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import NotesPage from './components/NotesPage';
import NoteContent from './components/NotesContent';
import notesData from './data/notes.json';
import './App.css';
import Header from './components/Header';
import WishPage from './components/WishPage.tsx';
import WatchlistPage from './components/watchlist/WatchlistPage.tsx';
import Watched from './components/watchlist/Watched.tsx';
import AddMovie from './components/watchlist/AddMovie.tsx';
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from './context/GlobalState.tsx'
import Gallery from './components/Gallery.tsx';
import NavSwitcher from './components/NavSwitcher.tsx';
import MobileNavSwitcher from './components/MobileNavSwitcher.tsx';
import MovieDetails from './components/watchlist/MovieDetails.tsx';


const App: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [latestNoteId, setLatestNoteId] = useState<string | null>(null);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const storedNoteCount = parseInt(localStorage.getItem('noteCount') || '0', 10);
    const currentNoteCount = notesData.length;

    console.log('storedNoteCount:', storedNoteCount);
    console.log('currentNoteCount:', currentNoteCount);

    // If there are new notes, show the notification
    if (currentNoteCount > storedNoteCount) {
      setShowNotification(true);
      localStorage.setItem('noteCount', currentNoteCount.toString());

      const latestNote = notesData[notesData.length - 1];
      setLatestNoteId(latestNote.id);

    }
  }, [notesData.length]);

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
    <GlobalProvider>
      <Router>
        <Header />

        {width > 768 ? <NavSwitcher /> : <MobileNavSwitcher />}

        <div className="app-container">
          {showNotification && (
            <>
              <div className="overlay" onClick={() => setShowNotification(false)}></div>
              <div className="notification">
                <h2 className='title'>Hi user!</h2>
                <p className='paragraph'>C'è una nuova nota<span className='emoji'>✨</span></p>
                {latestNoteId && <Link className='notif-link' to={`/notes/${latestNoteId}`} onClick={() => setShowNotification(false)}>Clicca qua per leggerla</Link>}
                <button className='notif-btn' onClick={() => setShowNotification(false)}>Chiudi</button>
              </div>
            </>
          )}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notes" element={<NotesPage />}>
              <Route path=":id" element={<NoteContent />} />
            </Route>


            <Route path="/wish" element={<WishPage />} />

            <Route path="/gallery" element={<Gallery />} />

            <Route path="/watchlist" element={<WatchlistPage />} >
              <Route path="watched" element={<Watched />} />
              <Route path="add" element={<AddMovie />} />
            </Route>
            <Route path="movie/:title" element={<MovieDetails />} />



            <Route path="*" element={<div>404: Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </GlobalProvider>

  );
};

export default App;
