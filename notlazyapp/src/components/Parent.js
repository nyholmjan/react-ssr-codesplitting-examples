import React from 'react'
import { useState } from 'react'

import Child from './Child'

const Parent = () => {
  const [showChild, setShowChild] = useState(0)
  return (
    <div>
      <h1>Parent</h1>
      <button onClick={() => setShowChild(!showChild)}>Show child</button>
      { !!showChild && (
          <Child/>
      )}
    </div>
  )
}

export default Parent
