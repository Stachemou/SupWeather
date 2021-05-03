import { useState } from 'react';

export default function useUser() {
  const getUser = () => {
    return JSON.parse(sessionStorage.getItem('user'));
  };

  const [user, setUser] = useState(getUser());

  const saveUser = user=> {
    sessionStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  return {
    setUser: saveUser,
    user
  }
}