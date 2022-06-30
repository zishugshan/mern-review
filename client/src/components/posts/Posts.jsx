import 'bootstrap/dist/css/bootstrap.min.css';
import Post from "../post/Post";

export default function Posts({ posts }) {
  return (
    <div className="row tm-catalog-item-list">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}



