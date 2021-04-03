import React from 'react';
import Event from './Event'
import { eventsStateProps } from '../reducers'

const Events = ({state, dispatch}: eventsStateProps) => {
  return (
    <>
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
