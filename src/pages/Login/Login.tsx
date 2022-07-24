import React, {useState} from 'react';

import {useNavigate} from 'react-router-dom';

import {Button} from '../../components/Form/Button';
import {FormInput} from '../../components/Form/FormInput';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const body = await response.json();
    localStorage.setItem('token', body.token);
    navigate('/');
  };

  return (
    <div className='page flex justify-center items-center'>
      <form
        onSubmit={handleLogin}
        className='bg-gray-2 p-4 rounded-md flex flex-col gap-4 w-full max-w-md'
      >
        <h1>Login</h1>
        <FormInput
          label='Username'
          inputProps={{
            onChange: handleUsernameChanged,
            value: username,
            type: 'user',
            name: 'username',
          }}
        />
        <FormInput
          label='Password'
          inputProps={{
            name: 'password',
            value: password,
            onChange: handlePasswordChanged,
            type: 'password',
          }}
        />
        <div>
          <Button variant='primary' type='submit'>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};
