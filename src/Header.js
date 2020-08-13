import React from 'react';
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
const MyComponent = () => {
  return (
    // BEM
    <div className="header">
      <PersonIcon/>
      <h1>I am header</h1>
      <ForumIcon/>
    </div>
  );
};

export default MyComponent;
