import React from 'react';
import { LoginBg } from '../../assets';
import { Button } from '../../components';
import './detailBlog.scss';
import { useHistory } from 'react-router-dom';

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={LoginBg} alt="thumb" />
      <p className="blog-title">Title</p>
      <p className="blog-author">Author - date</p>
      <p className="blog-body">
        Veniam aliquip sunt nulla minim aliqua. Labore culpa qui eu irure dolor
        exercitation. Culpa ea consectetur velit velit velit dolore ullamco quis
        minim nulla. Dolor ullamco excepteur quis officia ullamco laborum ea
        laboris id ex veniam laboris aliqua elit. Ut esse minim eiusmod magna
        magna et amet mollit dolore.
      </p>
      <Button title="Kembali" onClick={() => history.push('/')} />
    </div>
  );
};

export default DetailBlog;
