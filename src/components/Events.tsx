import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import Event from './Event'
import { eventsStateProps } from '../reducers'

const Events = ({ state, dispatch }: eventsStateProps) => {
  const value = useContext(AppContext)
  return (
    <>
      <div>{value}</div>
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
          {state.map((event, index) => (<Event key={index} dispatch={dispatch} state={event}/>))}
        </tbody>
      </table>
    </>
  )
}

export default Events
