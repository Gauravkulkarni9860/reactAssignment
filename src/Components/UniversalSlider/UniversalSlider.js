import React from 'react';
import './UniversalSlider.css'


const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  return (
    <div className='containerStyles'>
      <div style={fillerStyles}>
        <span className='labelStyles'>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;