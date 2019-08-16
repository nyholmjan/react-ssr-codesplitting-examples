import React from 'react'
import { useState } from 'react'
import Loader from './Loader'

const Child = React.lazy(() => import('./Child'))

const Parent = () => {
  const [showChild, setShowChild] = useState(0)
  return (
    <div>
      <h1>Parent</h1>
      <button onClick={() => setShowChild(!showChild)}>Show child</button>
      { !!showChild && (
        <React.Suspense fallback={Loader}>
          <Child/>
        </React.Suspense>
      )}
    </div>
  )
}

export default Parent
