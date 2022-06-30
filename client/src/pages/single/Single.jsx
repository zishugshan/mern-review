import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import SinglePost from "../../components/singlePost/SinglePost";
import Posts from "../../components/posts/Posts";



export default function Single() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div className="tm-page-wrap mx-auto">
      <div className="container-fluid">
        <div className="mx-auto tm-content-container">
          <SinglePost/>
            <div className="row pt-4 pb-5">
              <div className="col-12">
                <h2 className="mb-5 tm-text-primary">Related books for You</h2>
                <Posts  posts={(posts
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)).slice(0,3)}/>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
