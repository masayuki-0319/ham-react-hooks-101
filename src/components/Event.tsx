import React from 'react';
import { eventType } from '../types/event';
import { Actions } from '../reducers/index'

interface eventProps {
  dispatch: React.Dispatch<Actions>
  event: eventType
}

const Event = ({ dispatch, event }: eventProps) => {
  const handleClickDeleteBUtton = () => {
    const result:boolean = window.confirm(`イベントID ${event.id} を本当に削除しますか？`)
    if (result) {
      dispatch({
        type: 'DELETE_EVENT',
        payload: {
          id: event.id
        }
      })
    }
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
