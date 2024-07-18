import React from 'react';
import './topicCSS.css'

const Topic1 = () => {
  return (
    <div className='main'>
      <h1>Programming Basics</h1>
      <p> 
        To be an expert at programming, one must master these basics.
      </p>

      <p>
        <ul>
          <li>print statments</li>
          <li>input/output</li>
          <li>using variables</li>
          <li>types</li>
          <li>functions</li>
          <li>imports</li>
          <li>and much more...</li>
        </ul>
      </p>

      <p>

        Dont worry, we will go through all of them and more in Computer Science 110! 
      </p>
    </div>
  );
}

export default Topic1;
