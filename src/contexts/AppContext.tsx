import React, { createContext } from 'react'
import { eventType } from '../types/event';
import { Actions } from '../reducers'

interface EventStore {
  state: eventType[],
  dispatch: React.Dispatch<Actions>
}

const defaultStore: EventStore = {
  state: [],
  dispatch: () => {},
}

const AppContext = createContext<EventStore>(defaultStore)

export default AppContext
