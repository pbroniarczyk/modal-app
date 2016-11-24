import React from 'react';

const style = {
  display: 'block',
  margin: '0px',
  padding: '40px 25px',
}

export default class Desc extends React.Component {
  render() {
    return(
      <p style={style}>Click above to pick a date.</p>
    )
  }
};
