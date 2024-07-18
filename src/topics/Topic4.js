import React from 'react';
import './topicCSS.css'

const Topic1 = () => {
  return (
    <div className='main'>
      <h1>What are IDEs?</h1>
      <p> 
        IDEs (Integrated Development Environments) are powerful editors to write 
        code. We use these because you can more efficiently write your code. The IDE
        will let you know if you made typos or errors in your syntax. It does this
        by underlining or highlighting your mistakes. Most modern IDEs do this (VS CODE for example),
        but choosing one is up to you and the task at hand.
      </p>
    </div>
  );
}

export default Topic1;
