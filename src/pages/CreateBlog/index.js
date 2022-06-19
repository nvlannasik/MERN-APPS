import React from 'react';
import { Button, Input, TextArea, Upload, Gap } from '../../components';
import './createBlog.scss';
import { useHistory } from 'react-router-dom';

const CreateBlog = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push('/');
  };
  return (
    <div className="blog-post">
      <p className="title">Create Blog</p>
      <Input label="Post Title" />
      <p>Upload image</p>
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" onClick={handleClick} />
      </div>
    </div>
  );
};

export default CreateBlog;
