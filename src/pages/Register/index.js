import React from 'react';
import { RegisterBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import './register.scss';
import { useHistory } from 'react-router-dom';

const Register = () => {
  let history = useHistory();
  const handleLoginClick = () => {
    history.push('/login');
  };
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-images" alt="RegisterBg" />
      </div>
      <div className="right">
        <p>Register</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={18} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Register" />
        <Gap height={50} />
        <Link title="Kembali ke Login" onClick={handleLoginClick} />
      </div>
    </div>
  );
};

export default Register;
