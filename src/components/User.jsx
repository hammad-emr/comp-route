import React from 'react';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div>
      <h1>users detail page..</h1>
      <h2><Link to = "/user/1">User 1</Link></h2>
      <h2><Link to = "/user/2">User 2</Link></h2>
      <h2> <Link to = "/user/3">User 3</Link></h2> 
    </div>
  );
}

export default User;
