import { useState } from 'react'

function setCount() {
     const [count, setCount] = useState(0);

     const decrease = () => {
          setCount(count + 1);
     }
     const increase = () => {
          setCount(count - 1);
     }

     return {
          decrease, increase, count
     }
}

export default setCount