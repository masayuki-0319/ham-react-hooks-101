import React, { useReducer, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import Event from './Event'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      payload: {
        title: title,
        body: body
      }
    })
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const result:boolean = window.confirm('全てのイベントを本当に削除しますか？')
    if (result) dispatch({ type: 'DELETE_ALL_EVENT' })
  }

  const unCreatable: boolean = title === '' || body === ''
  const unAllDeletable: boolean = state.length === 0

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}></input>
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}></textarea>
        </div>
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={unAllDeletable}>全てのイベントを削除する</button>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (<Event key={index} dispatch={dispatch} event={event}/>))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
