import request from 'superagent'

const rootUrl = '/api/v1'

export function getVocab() {
  return request.get(rootUrl + '/vocab').then((res) => {
    return res.body.vocab
  })
}
