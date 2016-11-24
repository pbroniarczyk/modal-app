import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  marginTop: '50px',
};

const ButtonRaised = () => (
  <RaisedButton label='Primary'
    primary={true}
    style={style}
    label='Button'
  />
);

export default ButtonRaised;
