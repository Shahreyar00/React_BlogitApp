import React, { useState } from 'react';
import "./addNote.css";

const AddNote = ({ addNote }) => {
    const [noteText, setNoteText] = useState("");
    const characterLimit = 150;

    const handleChange = (e) =>{
        if(characterLimit - e.target.value.length>=0){
            setNoteText(e.target.value);
        }
    };

    const handleSaveClick = () =>{
        if(noteText.trim().length > 0){
            addNote(noteText);
            setNoteText("");
        }
    };

    return (
        <div className="note new">
            <textarea
				placeholder='Add a note...'
				value={noteText}
				onChange={handleChange}
			/>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
            </div>
        </div>
    )
}

export default AddNote