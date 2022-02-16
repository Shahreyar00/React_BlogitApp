import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../../firebase-config';
import "./createBlog.css";

const CreateBlog = ({ isAuth }) => {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db,"posts");
    let navigate = useNavigate();

    const createPost = async() =>{
        if(postText.trim().length>0 && title.trim().length>0){
            await addDoc(postsCollectionRef,{
                title,
                postText,
                author:{name:auth.currentUser.displayName, id:auth.currentUser.uid},
            });
            setTitle("");
            setPostText("");
            navigate("/blogs");
        }
    };

    useEffect(()=>{
        if(!isAuth){
            navigate("/login");
        }
    },[]);


    return (
        <div className="createCont">
            <div className="cpContainer">
                <h1 className="cpHeading">Write A New Blog</h1>
                <div className="inputGp">
                    <label htmlFor="title">Title</label>
                    <input 
                        placeholder="Title..."
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div className="inputGp">
                    <label htmlFor="post">Post</label>
                    <textarea 
                        placeholder="Post..."
                        onChange={(e)=>setPostText(e.target.value)}
                    />
                </div>
                <div className="submit-btn">
                    <button onClick={createPost}>Submit Post</button>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog