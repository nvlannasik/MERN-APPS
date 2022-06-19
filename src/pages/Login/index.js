import React from 'react';
import { LoginBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import { useHistory } from 'react-router-dom';

const Login = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push('/');
  };
  const handleRegisterClick = () => {
    history.push('/register');
  };
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-images" alt="RegisterBg" />
      </div>
      <div className="right">
        <p>Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Login" onClick={handleClick} />
        <Gap height={50} />
        <Link
          title="Belum punya akun? Daftar Disini"
          onClick={handleRegisterClick}
        />
      </div>
    </div>
  );
};

export default Login;
