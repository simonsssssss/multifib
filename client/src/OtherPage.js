import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <div>
        <p><b>Nazwa programu:</b> multifib</p>
        <p>Szymon Schab</p>
        <p>gr. 2.4</p> <br/>
      </div>
      <Link to="/">Wróć</Link>
    </div>
  );
};
