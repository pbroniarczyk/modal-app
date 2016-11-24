import React from 'react';
import DatePicker from 'material-ui/DatePicker';

const style = {
  cursor: 'pointer !important',
  margin: '25px 25px 0px'
};

const Date = () => (
  <div>
    <DatePicker
      hintText="Choose date"
      style={style}
    />
  </div>
);

export default Date;
