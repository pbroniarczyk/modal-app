import React from 'react';

const style = {
  backgroundColor: '#0097A7',
  color: '#fff',
  padding: '25px',
  margin: '0px',
};

export default class Header extends React.Component {
  render() {
    return(
      <h1 style={style}>Set your date</h1>
    )
  }
};
