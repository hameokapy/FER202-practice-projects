import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const PostListPage = () => {
    const navigate = useNavigate();
    const API_URL = 'http://localhost:5000/posts';

    const [editingPostId, setEditingPostId] = useState(null);

    //GET: read all posts
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    
    useEffect(() => {
            const fetchPost = async () => {
            try {
            const res = await axios.get(API_URL);
            setPosts(res.data); //ko chơi destructuring ở đây vì ko cần giữ dữ liệu cũ
            } catch(error) {
            console.log(error);
            }
        }
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

    //EDIT: cập nhật post
    const handleEditPost = async (e) => {
        e.preventDefault();

        try {
        const editingPost = {
            id: editingPostId,
            title,
            author
        }
        const response = await axios.put(`${API_URL}/${editingPostId}`, editingPost);
        setPosts(posts.map(p => p.id === editingPostId ? response.data : p));
        setTitle("");
        setAuthor("");
        setEditingPostId(null);
        } catch(error) {
        console.log(error);
        }
    }

    //DELETE: xóa post
    const handleDeletePost = async (id) => {

        if(!window.confirm('Bạn có chắc chắn muốn xóa bài đăng này?')) return;

        try {
        await axios.delete(`${API_URL}/${id}`);
        setPosts(posts.filter(p => p.id !== id));
        } catch(error) {
        console.log(error);
        }
    }

    return (
        <div className="App m-2">
        <form onSubmit={editingPostId ? handleEditPost : handleAddPost}>
            <h3>Thêm bài viết mới / Cập nhật bài viết</h3>
            <div className='d-flex gap-2 justify-content-center'>
            <input type="text" placeholder='Tiêu đề bài viết' value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder='Tên tác giả' value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <button type='submit'>{editingPostId ? "Cập nhật" : "Thêm mới"}</button>
            {editingPostId && (<button onClick={() => {setEditingPostId(null); setAuthor(""); setTitle("")}}>Hủy</button>)}
            </div>
        </form>
        <hr/>
        <h1>Quản lý bài viết</h1>
        <h3>Danh sách bài viết hiện có</h3>
        {posts.length === 0 ? (
            <p>Chưa có bài viết nào</p>
        ) : (
            <ul className='list-unstyled'>
            {posts.map(post => {
                return (<li key={post.id}>
                <strong>{post.title}</strong> - {post.author} (ID: {post.id}) 
                <button onClick={() => {setEditingPostId(post.id); setAuthor(post.author); setTitle(post.title)}}>Sửa</button>
                <button onClick={() => handleDeletePost(post.id)}>Xóa</button>
                <button onClick={() => navigate(`/post/${post.id}`)}>Xem chi tiết</button>
                </li>)
            })}
            </ul>
        )}

        </div>
    )
}

export default PostListPage;