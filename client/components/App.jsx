import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchVocab } from '../actions'

function App() {
  const vocab = useSelector((state) => state.vocab)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchVocab())
  }, [])

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with te reo Māori!!</h1>
        <ul>
          {vocab.map((kupu) => (
            <li key={kupu}>{kupu}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
