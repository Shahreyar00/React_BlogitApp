import React, { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import { FaTrash } from "react-icons/fa";
import "./blogs.css";
import { useNavigate } from 'react-router-dom';

const Blogs = ({ isAuth }) => {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    let navigate = useNavigate();

    useEffect(()=>{
        const getPosts = async() =>{
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc)=>({
                ...doc.data(),
                id: doc.id 
            })));
        };
        getPosts();
    }, []);

    const deletePost = async(id) =>{
        const postDoc = doc(db,"posts",id);
        await deleteDoc(postDoc);
        window.location.reload();
    };

    useEffect(()=>{
        if(!isAuth){
            navigate("/login");
        }
    },[]);

    return (
        <div className="blogCont">
            <div className="blogWrapper">
                <div className="blog-heading">Blogs shared by the community</div>
                {postLists.map((post)=>{
                    return(
                        <div className="post">
                            <div className="postHeader">
                                <div className="title">
                                    <h1>{post.title}</h1>
                                </div>
                                <div className="deletePost">
                                    {isAuth && post.author.id===auth.currentUser.uid && (
                                        <button
                                            onClick={()=>{deletePost(post.id)}}
                                            className="home-btn"
                                        >
                                            <FaTrash /> 
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="postTextContainer">
                                {post.postText}
                            </div>
                            <button className="post-author">
                                <h3>@ {post.author.name}</h3>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Blogs