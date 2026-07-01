import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const PostDetailPage = () => {
    const [detail, setDetail] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/posts/${id}`);
                setDetail(res.data);
            } catch(error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div className='text-center m-2'>
            <h1 className='pb-2'>Chào mừng mày tới trang chi tiết!</h1>
            <h3>Title: {detail.title || 'Tao tên Hehe!'}</h3>
            <h3>Author: {detail.author || 'Hehe là cc gì ?!?'}</h3>
        </div>
    )
}

export default PostDetailPage;