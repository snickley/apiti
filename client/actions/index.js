import { getVocab } from '../apis/vocab'

export const SET_VOCAB = 'SET_VOCAB'

export function setVocab(vocab) {
  return {
    type: SET_VOCAB,
    payload: vocab,
  }
}

export function fetchVocab() {
  return (dispatch) => {
    return getVocab().then((vocab) => {
      dispatch(setVocab(vocab))
    })
  }
}
