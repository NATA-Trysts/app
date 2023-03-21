import { orderBy, take } from 'lodash-es'
import * as timeago from 'timeago.js'

import { Space } from '@/stores'

const useDashboard = () => {
  const calculateTimeAgo = (timestamp: number) => {
    const timeAgo = timeago.format(timestamp)

    return timeAgo
  }

  const sortRecentSpace = (spaces: Space[]) => {
    const recentSpaces = take(orderBy(spaces, ['timeStamp'], ['desc']), 4)

    return recentSpaces
  }

  const convertArrayToMap = (array: Space[]) => {
    const librarySpaces = new Map<string, Space[]>()

    array.forEach((space) => {
      if (librarySpaces.has(space.category)) {
        const spaces = librarySpaces.get(space.category)

        if (spaces) {
          spaces.push(space)
          librarySpaces.set(space.category, spaces)
        }
      } else {
        librarySpaces.set(space.category, [space])
      }
    })

    return librarySpaces
  }

  return { calculateTimeAgo, convertArrayToMap, sortRecentSpace }
}

export { useDashboard }
