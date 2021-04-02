import React from 'react';
import { eventType } from '../types/event';
import { eventAction } from '../reducers/index'

interface eventProps {
  dispatch: React.Dispatch<eventAction>
  event: eventType
}

const Event = ({ dispatch, event }: eventProps) => {
  const handleClickDeleteBUtton = () => {
    dispatch({ type: 'DELETE_EVENT', ...event })
  }

  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteBUtton}>削除</button></td>
    </tr>
  )
}

export default Event
