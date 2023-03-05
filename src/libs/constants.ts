import { CustomColor } from '@/layouts/common'
import { EmailInputStatusType } from '@/stores/login'

export type ColorListObject = {
  [key in CustomColor]: string
}

type NotificationType = 'notification' | 'warning' | 'error'
type TabCategoryProperty = 'background' | 'filter'

type NotificationColor = {
  [key in NotificationType]: string
}

type NotificationCloseColor = {
  [key in NotificationType]: string
}

type TabCategoryColor = {
  [key in TabCategoryProperty]: string
}

type InputStatusColor = {
  [key in EmailInputStatusType]: string
}

const COLOR_PICKER_LIST: ColorListObject = {
  purple: 'hsla(286, 65%, 66%, 1)',
  green: 'hsla(137, 65%, 66%, 1)',
  blue: 'hsla(216, 65%, 66%, 1)',
}

const NOTIFICATION_COLOR: NotificationColor = {
  notification: 'hsla(205.43, 65%, 54%, 0.7)',
  warning: 'hsla(54.089, 81%, 51%, 0.7)',
  error: 'hsla(0, 55%, 43%, 0.7)',
}

const NOTIFICATION_CLOSE_COLOR: NotificationCloseColor = {
  notification: 'hsla(205.091, 45%, 24%, 0.8)',
  warning: 'hsla(205.091, 45%, 24%, 0.8)', // TODO: update right color
  error: 'hsla(205.091, 45%, 24%, 0.8)', // TODO: update right color
}

const TAB_CATEGORY_COLOR: TabCategoryColor = {
  background: 'linear-gradient(90deg, #FF958A -1.56%, #FF6E88 50.54%, #FF93A7 101.56%)',
  filter:
    'drop-shadow(0px 0px 48px rgba(230, 101, 101, 0.14)) drop-shadow(0px 0px 25.0368px rgba(230, 101, 101, 0.101248)) drop-shadow(0px 0px 11.7504px rgba(230, 101, 101, 0.078624)) drop-shadow(0px 0px 5.1456px rgba(230, 101, 101, 0.061376)) drop-shadow(0px 0px 2.2272px rgba(230, 101, 101, 0.038752))',
}

const FILTER_ICON_TO_WHITE =
  'brightness(0) saturate(100%) invert(100%) sepia(13%) saturate(7481%) hue-rotate(291deg) brightness(116%) contrast(112%)'

const INPUT_DROP_SHADOW: InputStatusColor = {
  empty: 'none',
  invalid:
    'drop-shadow(0px 10px 41px rgba(218, 33, 33, 0.49)) drop-shadow(0px 5.0625px 17.8734px rgba(218, 33, 33, 0.33075)) drop-shadow(0px 2px 6.6625px rgba(218, 33, 33, 0.245)) drop-shadow(0px 0.4375px 2.37031px rgba(218, 33, 33, 0.15925))',
  valid: 'drop-shadow(0px 5px 36px rgba(87, 130, 187, 0.51)) drop-shadow(0px 1px 5.85px rgba(87, 130, 187, 0.255));',
  errorPending:
    'drop-shadow(0px 10px 41px rgba(218, 33, 33, 0.49)) drop-shadow(0px 5.0625px 17.8734px rgba(218, 33, 33, 0.33075)) drop-shadow(0px 2px 6.6625px rgba(218, 33, 33, 0.245)) drop-shadow(0px 0.4375px 2.37031px rgba(218, 33, 33, 0.15925))',
}

const INPUT_BORDER: InputStatusColor = {
  empty: 'transparent',
  valid: '#3B79D5',
  invalid: '#DA2121',
  errorPending: '#DA2121',
}

const TRYSTS_EMAIL_LOGIN = 'login@trysts.io'

export {
  COLOR_PICKER_LIST,
  FILTER_ICON_TO_WHITE,
  INPUT_BORDER,
  INPUT_DROP_SHADOW,
  NOTIFICATION_CLOSE_COLOR,
  NOTIFICATION_COLOR,
  TAB_CATEGORY_COLOR,
  TRYSTS_EMAIL_LOGIN,
}
export type { NotificationType }
