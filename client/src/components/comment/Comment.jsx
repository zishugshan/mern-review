import "./comment.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Comment() {
  return (
<div class="scrolling-box">
  <div class="container">
  <form className="writeForm" onSubmit="">
      <div class="form-group">
        <textarea 
          class="form-control status-box" 
          rows="1" 
          placeholder="Enter your comment here...">
        </textarea>
      </div>
    
    <div class="button-group pull-right">
      <a href="#" class="btn btn-primary">Post</a>
    </div>
  
    
    <ul class="posts">
      <li>Nice Post.</li>
      <li>Greatest book.</li>
      <li>Knowledge sea.</li>
      <li>Information based.</li>
      <li>Life learning.</li>
      <li>Good work.</li>
      
    </ul>
    
    </form>
  </div>
  </div>
  );
}



