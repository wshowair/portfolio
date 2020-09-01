import React, { useEffect, useState, FunctionComponent } from 'react'
import { Message } from '@portfolio/api-interfaces'

export const App: FunctionComponent<{}> = () => {
  const [m, setMessage] = useState<Message>({ message: '' })

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage)
  }, [])

  return (
    <>
      <div style={ { textAlign: 'center' } }>
        <h1>Welcome to portfolio!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="nrwl"
        />
      </div>
      <div>{ m.message }</div>
    </>
  )
}

export default App
