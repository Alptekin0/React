import React, { useState } from 'react'

function useVisible() {
     const [visible, setVisible] = useState (false);

     const request = () => {
          setVisible(!visible);
     }


  return {
     request, visible
  }
}

export default useVisible