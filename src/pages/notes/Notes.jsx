import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { FaSearch, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AddNote from '../../components/addNote/AddNote';
import "./notes.css";

const Notes = ({ isAuth }) => {
    const [notes, setNotes] = useState([
        // {
        //     id: nanoid(),
        //     text: "This is my first note",
        //     date: "21/12/2021"
        // },
        // {
        //     id: nanoid(),
        //     text: 'This is my second note!',
        //     date: '23/01/2022',
        // },
        // {
        //     id: nanoid(),
        //     text: 'This is my third note!',
        //     date: '23/02/2022',
        // },
        // {
        //     id: nanoid(),
        //     text: 'This is my new note!',
        //     date: '30/04/2022',
        // },
    ]);

    const [searchText, setSearchText] = useState("");

    let navigate = useNavigate();
    
    useEffect(()=>{
        const savedNotes = JSON.parse(localStorage.getItem("ufeed-notes-data"));
        if(savedNotes){
            setNotes(savedNotes);
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem("ufeed-notes-data",JSON.stringify(notes));
    },[notes]);

    useEffect(()=>{
        if(!isAuth){
            navigate("/login");
        }
    },[]);

    const addNote = (text) =>{
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    }

    const deleteNote = (id) =>{
        const newNotes = notes.filter((note)=> note.id!==id);
        setNotes(newNotes);
    }

    const filteredNotes = notes.filter((note)=>{
        return note.text.toLowerCase().includes(searchText.toLowerCase());
    })

    return (
        <div className="notesCont">
            <div className="notesWrapper">
                <div className="notes-title">
                    <h1>(All your notes at one place)</h1>
                </div>
                <div className="notesHeader">
                    <FaSearch className="notes-search-icon" />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        onChange={(e)=>{
                            setSearchText(e.target.value)
                        }}    
                    />
                </div>
                <div className="notesDisplay">
                    {filteredNotes.map((note)=>{
                        return(
                            <div className="note">
                                <span>{note.text}</span>
                                <div className="note-footer">
                                    <small>{note.date}</small>
                                    <FaTrash 
                                        onClick={()=>deleteNote(note.id)} 
                                        className="notes-delete-icon" 

                                    />
                                </div>
                            </div>
                        )
                    })}
                    <AddNote addNote={addNote} />
                </div>
            </div>
        </div>
    )
}

export default Notes