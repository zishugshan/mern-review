import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import "./post.css";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div class="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
      <div className="position-relative tm-thumbnail-container">
        {post.photo && <img src={PF + post.photo} alt=""  className="img-fluid tm-catalog-item-img"/>}  
          <a href={`/post/${post._id}`} className="position-absolute tm-img-overlay">
          </a>
      </div>    
      <div className="p-4 tm-bg-gray tm-catalog-item-description">
        <h3 className="tm-text-primary mb-3 tm-catalog-item-title">
          {/* <Link to={`/post/${post._id}`} className="link"> */}
          <a href={`/post/${post._id}`} className="text-decoration-none">
            <span className="tm-text-primary postTitle">{post.title}</span>
          </a>
          {/* </Link> */}
        </h3>
        <hr/>
        <p><span className="postDate">
        <a href={`/?user=${post.username}`} className="tm-text-link text-decoration-none">{post.username}</a></span>
          <span className="float-end">{new Date(post.createdAt).toDateString()}
        
        
        </span></p>
        
          <p className="tm-catalog-item-text">{(post.desc).substring(0,150)+"...."}</p>
      </div>
    </div>
  );
}



