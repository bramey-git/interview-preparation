import React from 'react'

export default function displayTip (advice){
  return (
    <div className='wrapper' key={advice.headline} >
      <p>
        <span> ~ {advice.headline}</span>
        {advice.tip}
      </p>
    </div>
  );
}