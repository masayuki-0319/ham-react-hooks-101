type eventType = {
  id?: number,
  title: string,
  body: string
}

type actionType = {
  type: 'CREATE_EVENT' | 'DELETE_EVENT' | 'DELETE_ALL_EVENT'
}

export type eventAction = eventType & actionType

const events = (state: eventType[] = [], action: eventAction) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body }
      const length = state.length
      const id = length === 0 ? 1 : (state[length - 1].id as number) + 1

      return [...state, { id: id, ...event }]
    case 'DELETE_EVENT':
      return state.filter(event => event.id !== action.id)
    case 'DELETE_ALL_EVENT':
      return []
    default:
      return state
  }
}


export default events

// type eventActionParams = {
//   payload: { [key: string]: any }
// } & actionType

// const eventCreate = (title: string, body: string) => ({
//   type: 'CREATE_EVENT',
//   payload: {
//     title: title,
//     body: body
//   }
// })

// const eventDelete = (id: number) => ({
//   type: 'DELETE_EVENT',
//   payload: {
//     id: id
//   }
// })

// type Actions = (
//   | ReturnType<typeof eventCreate>
//   | ReturnType<typeof eventDelete>
// )
