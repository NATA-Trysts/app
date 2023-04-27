import { orderBy, take } from 'lodash-es'
import { useEffect, useState } from 'react'
import * as timeago from 'timeago.js'

import { CustomableTheme, Space } from '@/models/Space'
import { useDashboardStore } from '@/stores'

const useDashboard = () => {
  const mySpaces = useDashboardStore((state) => state.mySpaces)

  const [librarySpaces, setLibrarySpaces] = useState<Map<CustomableTheme, Space[]>>(new Map())

  useEffect(() => {
    setLibrarySpaces(convertSpacesToLibrarySpaces(mySpaces))
  }, [mySpaces])

  const calculateTimeAgo = (timestamp: number) => {
    const timeAgo = timeago.format(timestamp)

    return timeAgo
  }

  const sortRecentSpace = (spaces: Space[]) => {
    const recentSpaces = take(orderBy(spaces, ['latestEdited'], ['desc']), 4)

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

  return { calculateTimeAgo, sortRecentSpace, librarySpaces }
}

export { useDashboard }

