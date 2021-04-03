import { eventType } from '../types/event';

const CREATE_EVENT = 'CREATE_EVENT' as const
const DELETE_EVENT = 'DELETE_EVENT' as const
const DELETE_ALL_EVENT = 'DELETE_ALL_EVENT' as const

const eventCreate = (title: string, body: string) => ({
  type: CREATE_EVENT,
  payload: {
    title: title,
    body: body
  }
})

const eventDelete = (id: number) => ({
  type: DELETE_EVENT,
  payload: {
    id: id
  }
})

const eventAllDelete = () => ({
  type: DELETE_ALL_EVENT
})

type Actions = (
  | ReturnType<typeof eventCreate>
  | ReturnType<typeof eventDelete>
  | ReturnType<typeof eventAllDelete>
)

const events = (state: eventType[] = [], action: Actions) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.payload.title, body: action.payload.body }
      const length = state.length
      const id = length === 0 ? 1 : (state[length - 1].id) + 1

      return [...state, { id: id, ...event }]
    case DELETE_EVENT:
      return state.filter(event => event.id !== action.payload.id)
    case DELETE_ALL_EVENT:
      return []
    default:
      return state
  }
}

export interface eventStateProps {
  state: eventType,
  dispatch: React.Dispatch<Actions>
}

export interface eventsStateProps {
  state: eventType[],
  dispatch: React.Dispatch<Actions>
}

export default events
