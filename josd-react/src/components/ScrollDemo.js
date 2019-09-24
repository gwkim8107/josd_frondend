import React from 'react';
const list = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  }
];
const ScrollDemo = () => (
  <ul>
    {list.map(item => {
      return (
        <li
          key={item.id}
          style={{ height: '250px', border: '1px solid black' }}
        >
          <div>{item.id}</div>
          <div>{item.firstname}</div>
          <div>{item.lastname}</div>
          <div>{item.year}</div>
        </li>
      );
    })}
  </ul>
);
export default ScrollDemo;