import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePost from './components/CreatePost'
import Post from './components/Post';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App/>}/>
  <Route path='/create' element={<CreatePost/>}/>
  <Route path='/create/post' element={<Post/>}/>
    </Routes>
  </BrowserRouter>
  </>
);

