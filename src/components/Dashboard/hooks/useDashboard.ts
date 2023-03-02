import * as timeago from 'timeago.js'

const useDashboard = () => {
  const calculateTimeAgo = (timestamp: number) => {
    const timeAgo = timeago.format(timestamp)

    return timeAgo
  }

  return { calculateTimeAgo }
}

export { useDashboard }
