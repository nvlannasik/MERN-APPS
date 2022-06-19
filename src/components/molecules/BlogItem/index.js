import React from 'react';
import './blogItem.scss';
import { LoginBg } from '../../../assets';
import { Button, Gap } from '../../atoms';
import { useHistory } from 'react-router-dom';

const BlogItem = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push('/detail-blog');
  };
  return (
    <div className="blog-item">
      <img className="image-thumb" src={LoginBg} alt="post" />
      <div className="content-detail">
        <p className="title">title</p>
        <p className="author">Author - date</p>
        <p className="body">lorem ipsum is simp</p>
        <Gap height={20} />
        <Button title="Detail" onClick={handleClick} />
      </div>
    </div>
  );
};

export default BlogItem;
