import { orderBy, take } from 'lodash-es'
import * as timeago from 'timeago.js'

import { CustomableTheme, Space } from '@/models/Space'

const useDashboard = () => {
  const calculateTimeAgo = (timestamp: number) => {
    const timeAgo = timeago.format(timestamp)

    return timeAgo
  }

  const sortRecentSpace = (spaces: Space[]) => {
    const recentSpaces = take(orderBy(spaces, ['timeStamp'], ['desc']), 4)

    return recentSpaces
  }

  const convertSpacesToLibrarySpaces = (spaces: Space[]): Map<CustomableTheme, Space[]> => {
    const librarySpaces = new Map<CustomableTheme, Space[]>()

    const addSpaces = (theme: CustomableTheme, space: Space) => {
      if (librarySpaces.has(theme)) {
        const spaces = librarySpaces.get(theme)

        if (spaces) {
          spaces.push(space)
          // librarySpaces.set(theme, spaces)
        }
      } else {
        librarySpaces.set(theme, [space])
      }
    }

    spaces.forEach((space) => {
      if (space.theme) {
        addSpaces(space.theme, space)
      } else {
        addSpaces('custom', space)
      }
    })

    return librarySpaces
  }

  return { calculateTimeAgo, convertSpacesToLibrarySpaces, sortRecentSpace }
}

export { useDashboard }
