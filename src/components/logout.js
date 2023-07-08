import React from 'react'
import Home from '../components/home';
function logout() {
    const Logout = () => {
        sessionStorage.removeItem('user');
        window.location = '/';
    }
  return (
    <div>
      <button onClick={Logout}>Logout</button>
      <Home/>
    </div>
  )
}

export default logout
