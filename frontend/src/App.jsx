import React from 'react'
import './App.css'
import usePing from './hooks/apis/queries/usePing'

function App() {
  const { isLoading, data } = usePing()

  if (isLoading) {
    return <React.Fragment>Loading...</React.Fragment>
  } else {
    return <React.Fragment>Hello {data.message}</React.Fragment>
  }
}

export default App
