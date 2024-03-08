import AddNoteForm from './components/AddNoteForm';
import NoteList from './components/NoteList';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (indexToDelete) => {
    setNotes(notes.filter((_, index) => index !== indexToDelete));
  };
  useEffect(()=>{
    const values=JSON.parse(sessionStorage.getItem('nots'))
    if(values){setNotes(values)}
  },[])

  return (
    <div className="App max-w-5xl mx-auto">
      <header className=" text-black text-3xl p-4 mt-5 text-center">
         Notes Website
      </header>
      <main className="p-4">
        <AddNoteForm onAdd={addNote} notes={notes} />
        <NoteList notes={notes} onDelete={deleteNote} />
      </main>
    </div>
  );
}

export default App;
