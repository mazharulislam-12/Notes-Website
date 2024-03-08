
import { useState } from "react";

function AddNoteForm({ onAdd }) {
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(note);
    setNote(''); // Reset input after submission
  };

  return (
    <form className="form bg-white shadow-md rounded-lg px-8 pt-8 pb-8 mb-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="note">
          New Note
        </label>
        <input
          className="shadow rounded-lg appearance-none border rounded w-full py-20 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="note"
          type="text"
          placeholder="Add a new note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Add Note
      </button>
    </form>
  );
}

export default AddNoteForm;
