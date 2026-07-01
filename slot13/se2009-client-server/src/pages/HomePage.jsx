import React from 'react'
import { useNavigate } from 'react-router-dom';
import GoodbyeComponent from '../components/GoodbyeComponent';
import HelloComponent from '../components/HelloComponent';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className='App'>
        <GoodbyeComponent/>
        <HelloComponent/>
        <button onClick={() => navigate('/post')}>Sang Post List Page</button>
        <button onClick={() => navigate('/post/hehe')}>Sang Post Detail Page</button>
    </div>
  )
}

export default HomePage