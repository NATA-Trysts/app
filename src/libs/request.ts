import axios from 'axios'

import { apiUrl } from './constants'

const getUrl = (paths: string[]) => {
  return [apiUrl, ...paths].join('/')
}

const get = (paths: string[], params?: any) => {
  return axios
    .get(getUrl(paths), {
      params,
    })
    .then(({ data }) => data)
    .catch(({ response }) => {
      const { data } = response

      throw data.message
    })
}

export const request = {
  get,
}
