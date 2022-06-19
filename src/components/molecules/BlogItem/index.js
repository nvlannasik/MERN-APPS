import React from 'react';
import './blogItem.scss';
import { LoginBg } from '../../../assets';

const BlogItem = () => {
  return (
    <div className="blog-item">
      <img className="image-thumb" src={LoginBg} alt="post" />
      <div className="content-detail">
        <p className="title">title</p>
        <p className="author">Author - date</p>
        <p className="body">lorem ipsum is simp</p>
      </div>
    </div>
  );
};

export default BlogItem;
