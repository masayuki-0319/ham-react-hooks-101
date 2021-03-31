import React, { useEffect, useState } from 'react'

type appProps = {
  name: string,
  price: number
}

const App = (props: appProps) => {
  const [state, setState] = useState(props)
  const { name, price } = state

  useEffect(() => {
    console.log("This is like componentDidMount or componentDidUpdagte")
  })

  useEffect(() => {
    console.log("This is like componentDidMount")
  }, [name])

  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setState({...state, price: price + 1})} >+1</button>
      <button onClick={() => setState({...state, price: price - 1})} >-1</button>
      <button onClick={() => setState(props)} >Reset</button>
      <input value={name} onChange={e => {setState({...state, name: e.target.value})}}/>
    </>
  );
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App;
