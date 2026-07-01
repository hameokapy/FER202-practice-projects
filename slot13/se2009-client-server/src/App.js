import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PostListPage from './pages/PostListPage';
import PostDetailPage from './pages/PostDetailPage';
import HomePage from './pages/HomePage';

function App() {
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/post' element={isLoggedIn ? <PostListPage/> : (
          <h1 className='d-flex justify-content-center'>
            Đăng nhập đi rồi vào
          </h1>
        )}/>
        <Route path='/post/:id' element={<PostDetailPage/>}/>
        <Route path='*' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
