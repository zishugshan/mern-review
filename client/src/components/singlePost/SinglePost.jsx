import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import 'bootstrap/dist/css/bootstrap.min.css';
import './singlePost.css';
import Comment from "../../components/comment/Comment";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };
  return (
    <main>
      <div className="row mb-5 pb-4">
        <div className="col-12">
          
          <img width="1420" height="700"
            src={PF+post.photo} alt="source"/>
            
        </div>
      </div>
      <div className="row mb-5 pb-5">
          <div className="col-xl-8 col-lg-7">
              <div className="tm-video-description-box">
                  
                  {updateMode ? (<div>
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
          </div>
        ) : (
          <h1 className="mb-5 tm-text-primary tm-video-title">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon fa-solid fa-trash"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
            <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        
        
          </h1>
        )}
                  {updateMode ? (<div>
          <textarea
            className="singlePostDescInput"
            rows="10"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          </div>
        ) : (
          <p className="mb-4">{desc}</p>
        )}

        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
              </div>							
          </div>
          <div className="col-xl-4 col-lg-5">
              
              <div className="tm-bg-gray tm-share-box">
                  <h6 className="tm-share-box-title mb-4">Comments</h6>
                  <Comment/>								
              </div>
          </div>
        </div>
      
    </main> 
  );
}
