import { useState } from 'react';

export default function useUser() {
  const getUser = () => {
    return JSON.parse(sessionStorage.getItem('user'));
  };

  const [user, setUser] = useState(getUser());

  const saveUser = user=> {
    user = {name: user.name, _id: user._id}
    sessionStorage.setItem('user', JSON.stringify(user));
    console.log(user);
    setUser(user);
  };

  return {
    setUser: saveUser,
    user
  }
}