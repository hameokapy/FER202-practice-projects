import './App.css';
import GoodbyeComponent from './components/GoodbyeComponent';
import HelloComponent from './components/HelloComponent';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const API_URL = 'http://localhost:5000/posts';

  //GET: read all posts
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  
  const fetchPost = async () => {
    try {
      const res = await axios.get(API_URL);
      setPosts(res.data);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPost();
  }, []);

  //POST: tạo post mới
  
  const handleAddPost = async (e) => {
    e.preventDefault();
    
    if(!title || !author) {
      alert("Vui lòng điền đủ thông tin");
      return;
    }

    try {
      const response = await axios.post(API_URL, {title, author});
      setPosts([...posts, response.data]);
      setTitle("");
      setAuthor("");
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <HelloComponent/>
      <GoodbyeComponent/>
      <hr/>
      <form onSubmit={handleAddPost}>
        <h3>Thêm bài viết mới</h3>
        <div className='d-flex gap-2 justify-content-center'>
          <input type="text" placeholder='Tiêu đề bài viết' value={title} onChange={(e) => setTitle(e.target.value)}/>
          <input type="text" placeholder='Tên tác giả' value={author} onChange={(e) => setAuthor(e.target.value)}/>
          <button type='submit'>Thêm mới</button>
        </div>
      </form>
      <hr/>
      <h1>Quản lý bài viết</h1>
      <h3>Danh sách bài viết hiện có</h3>
      {posts.length === 0 ? (
        <p>Chưa có bài viết nào</p>
      ) : (
        <ul>
          {posts.map(post => {
            return (<li key={post.id}>
              <strong>{post.title}</strong> - {post.author} (ID: {post.id}) 
            </li>)
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
