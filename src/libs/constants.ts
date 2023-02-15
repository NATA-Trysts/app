import { CustomColor } from '@/layouts/common'

export type ColorListObject = {
  [key in CustomColor]: string
}

type NotificationType = 'notification' | 'warning' | 'error'

type NotificationColor = {
  [key in NotificationType]: string
}

type NotificationCloseColor = {
  [key in NotificationType]: string
}

const COLOR_PICKER_LIST: ColorListObject = {
  purple: 'hsla(286, 65%, 66%, 1)',
  green: 'hsla(137, 65%, 66%, 1)',
  blue: 'hsla(216, 65%, 66%, 1)',
}

const NOTIFICATION_COLOR: NotificationColor = {
  notification: 'hsla(205.43, 65%, 54%, 0.9)',
  warning: 'hsla(54.089, 81%, 51%, 0.9)',
  error: 'hsla(0, 55%, 43%, 0.9)',
}

const NOTIFICATION_CLOSE_COLOR: NotificationCloseColor = {
  notification: 'hsla(205.091, 45%, 24%, 0.8)',
  warning: 'hsla(205.091, 45%, 24%, 0.8)', // TODO: update right color
  error: 'hsla(205.091, 45%, 24%, 0.8)', // TODO: update right color
}

export { COLOR_PICKER_LIST, NOTIFICATION_CLOSE_COLOR, NOTIFICATION_COLOR }
export type { NotificationType }

