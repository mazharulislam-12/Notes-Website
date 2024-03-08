import React from 'react';

function NoteList({ notes, onDelete }) {
  return (
    <div className="notes-container">
      {notes.map((note, index) => (
        <div key={index} className="note bg-gray-100 p-4 rounded mb-4 flex justify-between items-center">
          <p>{note}</p>
          <button className="btn btn-error" onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
