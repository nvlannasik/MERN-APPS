import React from 'react';
import { Button, Input, TextArea, Upload, Gap } from '../../components';
import './createBlog.scss';

const CreateBlog = () => {
  return (
    <div className="blog-post">
      <p className="title">Create Blog</p>
      <Input label="Post Title" />
      <p>Upload image</p>
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" />
      </div>
    </div>
  );
};

export default CreateBlog;
