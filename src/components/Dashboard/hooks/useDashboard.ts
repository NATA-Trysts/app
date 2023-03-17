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

  return { calculateTimeAgo, sortRecentSpace }
}

export { useDashboard }
