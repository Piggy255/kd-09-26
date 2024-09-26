import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

let response

function App() {

  const [postId, setPostId] = useState(0)
  const [post, setPost] = useState({})
  const [user, setUser] = useState()
  useEffect(() => {
    if(postId == 0){
      return;
    }
      fetch("https://jsonplaceholder.typicode.com/posts/"+postId)
        .then(response => response.json())
        .then(json => setPost(json))
        .then(
          fetch("https://jsonplaceholder.typicode.com/users/"+post.userId)
            .then(response => response.json())
            .then(json => setUser(json.name))
        )
  }, [postId]);

  return (
    <div className="App">
      <button onClick={() => {setPostId(postId+1)}}>Next post</button>
      <div className='post'>
        <h2>{user}</h2>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default App;



// ⠀⠀⠀⣀⡴⠚⠉⠙⢦⡀
// ⠀⠀⠀⠀⠀⠀⠀⣴⡯⢤⡀⠀⠀⠀⠀⠈⢧⡀
// ⠀⠀⠀⠀⠀⠀⣸⢹⢸⢇⡇⠀⣠⠤⠤⣄⡀⢹
// ⠀⠀⠀⠀⠀⢰⠃⠈⠉⠉⠀⢠⠇⠀⠀⠀⢹⣾
// ⠀⠀⠀⠀⠀⡞⠀⠀⠀⠀⠀⠀⣇⠀⠀⠀⠀⢸
// ⠀⠀⠀⠀⢸⠁⠀⠀⠀⠀⠀⠀⠘⢦⠀⠀⢀⠇
// ⠀⠀⠀⠀⡎⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠀⣾⠁
// ⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⢹⠀
// ⠀⠀⠀⢸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀
// ⠀⠀⠀⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀
// ⠀⠀⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀
// ⠀⢠⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘