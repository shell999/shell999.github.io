import React from 'react';
import './styles/App.css';
import Top from './components/topNav'
import Profile from './components/Profile';
import Category from './components/Category';
import Content from './components/Content';
import Comment from './components/Comment';
import SideNav from './components/SideNav';


function App() {
  return (
    <div className="App">

      <div>
        <Top />
      </div>

      <div>
        <Profile />
        <Category />
      </div>

      <div>
        <Content />
        <Comment />
      </div>

      <div>
        <SideNav />
      </div>

    </div>
  );
}

export default App;