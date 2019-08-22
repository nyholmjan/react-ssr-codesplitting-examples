import React from 'react'
import { useState } from 'react'
import Text from "./Text"
import Button from "@material-ui/core/Button"




const Story = () => {
  const [showChild, setShowChild] = useState(false)
  return (
    <div>
      <p>
       <Button variant="contained" color="secondary" onClick={() => setShowChild(!showChild)}>Show story</Button>
      </p>
      { !!showChild && (
        <Text/>
      ) }
    </div>
  )
}

export default Story
