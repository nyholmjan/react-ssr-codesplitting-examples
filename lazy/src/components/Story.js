import React from 'react'
import { useState } from 'react'
import Loader from './Loader'
import Button from "@material-ui/core/Button"
const Text = React.lazy(() => import('./Text'))


const Story = () => {
  const [showChild, setShowChild] = useState(false)
  return (
    <div>
      <p>
        <Button variant="contained" color="secondary" onClick={() => setShowChild(!showChild)}>Show story</Button>
      </p>
      { showChild && (
        <React.Suspense fallback={<Loader />}>
          <Text/>
        </React.Suspense>
      ) }
    </div>
  )
}

export default Story

