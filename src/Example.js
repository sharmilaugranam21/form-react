import React, { useState } from 'react';
  
const Example=()=> {
  const [change, setChange] = useState(true);     
      return (
        <div>
        <button onClick = {() => setChange(!change)}>
          Click !
        </button>
        {change?<h1>Before clicking the button</h1>:
                <h1>After clicking the button</h1>}
        </div>
        );
  }
 
export default Example;