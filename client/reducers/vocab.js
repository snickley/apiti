import { SET_VOCAB } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_VOCAB:
      return payload
    default:
      return state
  }
}

export default reducer
